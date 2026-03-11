import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiCalendar, FiClock, FiShare2, FiTwitter, FiLinkedin, FiCopy } from 'react-icons/fi';
import { useState } from 'react';
import toast from 'react-hot-toast';

const blogs = [
    {
        slug: 'react-server-components',
        title: 'Why React Server Components Change Everything',
        category: 'React',
        color: '#00d4ff',
        date: 'January 15, 2025',
        read: '6 min',
        author: { name: 'Arjun Verma', role: 'Lead Developer', avatar: 'AV', color: '#00d4ff' },
        excerpt: 'RSC is not just a feature — it fundamentally shifts how we think about rendering, data fetching, and component boundaries in modern React apps.',
        content: [
            {
                type: 'intro',
                text: `React Server Components (RSC) landed in React 19 and they've changed the way we think about building web apps at a fundamental level. This isn't just another React feature — it's a paradigm shift that affects how you structure your data fetching, how you split components, and how your app renders.`,
            },
            {
                type: 'heading',
                text: 'What Are Server Components, Really?',
            },
            {
                type: 'paragraph',
                text: `Before RSC, every React component ran in the browser. Server-side rendering (SSR) with Next.js helped by sending HTML first — but the JavaScript still shipped to the client, hydration still happened, and you still sent all your component code to the browser.`,
            },
            {
                type: 'paragraph',
                text: `Server Components are different. They run only on the server. They never ship to the browser. This means you can directly access databases, file systems, or any server-only resource inside a component — without an API layer.`,
            },
            {
                type: 'code',
                lang: 'jsx',
                text: `// This runs ONLY on the server - no JS sent to client
async function UserProfile({ userId }) {
  // Direct DB call - no API needed!
  const user = await db.users.findById(userId);
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
    </div>
  );
}`,
            },
            {
                type: 'heading',
                text: 'The Zero Bundle Size Advantage',
            },
            {
                type: 'paragraph',
                text: `Here's where it gets exciting. If you use a heavy library like moment.js or a markdown parser inside a Server Component, that library's code never makes it to the client bundle. Zero bytes. The server runs it, converts the output to HTML, and sends that HTML to the browser.`,
            },
            {
                type: 'paragraph',
                text: `This is a massive win for performance. Libraries that used to add 50-200KB to your bundle are now free to use — as long as they live in Server Components.`,
            },
            {
                type: 'callout',
                text: `⚡ Key insight: Server Components don't replace Client Components. They work together. Server Components handle data fetching and heavy computation. Client Components handle interactivity and state.`,
            },
            {
                type: 'heading',
                text: 'The New Mental Model: Where Does This Component Live?',
            },
            {
                type: 'paragraph',
                text: `The biggest adjustment is rethinking where each component lives. The rule is simple: if a component needs user interaction, browser APIs, or React state — it's a Client Component. Everything else can (and should) be a Server Component.`,
            },
            {
                type: 'code',
                lang: 'jsx',
                text: `// Server Component (default) - no "use client" directive
async function BlogPost({ postId }) {
  const post = await fetchPost(postId); // Direct fetch
  
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      {/* Client Component for interactivity */}
      <LikeButton postId={postId} initialLikes={post.likes} />
    </article>
  );
}

// Client Component - needs state
'use client';
function LikeButton({ postId, initialLikes }) {
  const [likes, setLikes] = useState(initialLikes);
  return <button onClick={() => setLikes(l => l + 1)}>{likes} ❤️</button>;
}`,
            },
            {
                type: 'heading',
                text: 'Data Fetching Without useEffect',
            },
            {
                type: 'paragraph',
                text: `One of the biggest pain points in React has always been data fetching. useEffect, loading states, error handling — it's a lot of boilerplate. Server Components simplify this dramatically. You just await your data at the top of the component. No hooks, no loading spinners for the initial load, no waterfalls from nested useEffect calls.`,
            },
            {
                type: 'paragraph',
                text: `React's Suspense works beautifully with this — you can show skeleton UIs while Server Components fetch their data, without any of the manual loading state management you'd normally write.`,
            },
            {
                type: 'heading',
                text: 'Should You Use RSC Today?',
            },
            {
                type: 'paragraph',
                text: `If you're building a new Next.js 14+ app, yes — the App Router is built around Server Components and it's production-ready. For existing projects, migration is incremental, not a rewrite. Start by converting data-fetching components at the leaf level.`,
            },
            {
                type: 'paragraph',
                text: `The learning curve is real, but the payoff — smaller bundles, simpler data fetching, and better performance — is absolutely worth it. RSC represents the direction React is heading, and understanding it now gives you a significant advantage.`,
            },
        ],
        tags: ['React', 'RSC', 'Next.js', 'Performance', 'Frontend'],
        related: ['nestjs-mongodb-api', 'performance-optimization'],
    },
    {
        slug: 'nestjs-mongodb-api',
        title: 'Building Scalable APIs with NestJS and MongoDB',
        category: 'Backend',
        color: '#ff6b35',
        date: 'December 28, 2024',
        read: '8 min',
        author: { name: 'Rohan Das', role: 'Backend Engineer', avatar: 'RD', color: '#00ff88' },
        excerpt: "NestJS brings Angular-style structure to Node.js. Here's how we architect large-scale APIs that stay maintainable as they grow.",
        content: [
            {
                type: 'intro',
                text: `When your Node.js API grows beyond a few endpoints, the lack of enforced structure starts hurting. Files get large, dependencies get tangled, and onboarding new developers becomes painful. NestJS solves this with a strongly opinionated, module-based architecture inspired by Angular.`,
            },
            {
                type: 'heading',
                text: 'Why NestJS Over Plain Express?',
            },
            {
                type: 'paragraph',
                text: `Express is fantastic for small APIs and microservices. But when you have 50+ endpoints, complex business logic, and a team of developers, you need conventions. NestJS gives you dependency injection, decorators, modules, and TypeScript out of the box — turning your API into something that scales with your team.`,
            },
            {
                type: 'code',
                lang: 'typescript',
                text: `// Clean, decorator-based controller
@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Post()
  @Roles('admin')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
}`,
            },
            {
                type: 'heading',
                text: 'Structuring Modules the Right Way',
            },
            {
                type: 'paragraph',
                text: `The key to a maintainable NestJS app is clean module boundaries. Each domain (users, products, orders) gets its own module with its own controller, service, and schema. Modules explicitly declare what they export and import — making dependencies visible and testable.`,
            },
            {
                type: 'callout',
                text: `💡 Rule of thumb: If a service is used in 3+ modules, move it to a SharedModule. If it's used in 1, keep it inside that module's boundary.`,
            },
            {
                type: 'heading',
                text: 'MongoDB with Mongoose in NestJS',
            },
            {
                type: 'paragraph',
                text: `NestJS has first-class support for Mongoose via @nestjs/mongoose. Define your schemas with decorators, and the module handles connection management and model injection automatically.`,
            },
            {
                type: 'code',
                lang: 'typescript',
                text: `@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ unique: true, required: true })
  email: string;

  @Prop({ select: false })
  password: string;

  @Prop({ enum: ['user', 'admin'], default: 'user' })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);`,
            },
            {
                type: 'paragraph',
                text: `Combined with validation pipes and class-validator DTOs, you get automatic request validation, transformation, and clear documentation of your data contracts — without writing a single line of validation logic manually.`,
            },
            {
                type: 'heading',
                text: 'Performance Tips for Production',
            },
            {
                type: 'paragraph',
                text: `For production NestJS + MongoDB setups, always use connection pooling (Mongoose handles this), index your frequently queried fields, use lean() for read-only queries to skip Mongoose document overhead, and implement caching with Redis for expensive aggregation queries.`,
            },
        ],
        tags: ['NestJS', 'Node.js', 'MongoDB', 'Backend', 'API', 'TypeScript'],
        related: ['react-server-components', 'performance-optimization'],
    },
    {
        slug: 'tailwindcss-v4',
        title: "Tailwind CSS v4: What's New and Why It Matters",
        category: 'CSS',
        color: '#a78bfa',
        date: 'December 10, 2024',
        read: '5 min',
        author: { name: 'Sneha Patel', role: 'UI/UX Lead', avatar: 'SP', color: '#a78bfa' },
        excerpt: "The Vite plugin approach, CSS-first configuration, and performance improvements — a deep dive into what changed and why you should upgrade.",
        content: [
            {
                type: 'intro',
                text: `Tailwind CSS v4 is a ground-up rewrite of the framework. The CSS engine is rebuilt in Rust, the configuration is now CSS-first, and the Vite plugin approach eliminates PostCSS configuration entirely. It's faster, cleaner, and simpler to set up.`,
            },
            {
                type: 'heading',
                text: 'CSS-First Configuration',
            },
            {
                type: 'paragraph',
                text: `The biggest change: no more tailwind.config.js for most projects. You configure Tailwind directly in your CSS file using @theme. Design tokens are CSS custom properties — which means your theme values are available everywhere, not just in utility classes.`,
            },
            {
                type: 'code',
                lang: 'css',
                text: `/* Before (v3) - tailwind.config.js */
module.exports = {
  theme: {
    colors: { brand: '#00d4ff' }
  }
}

/* After (v4) - directly in CSS */
@import "tailwindcss";

@theme {
  --color-brand: #00d4ff;
  --font-display: 'Syne', sans-serif;
  --radius-card: 20px;
}`,
            },
            {
                type: 'callout',
                text: `🚀 Build speed improvement: Tailwind v4's Rust-based engine is 5x faster for full builds and 100x faster for incremental builds compared to v3.`,
            },
            {
                type: 'heading',
                text: 'The Vite Plugin Approach',
            },
            {
                type: 'paragraph',
                text: `In v4, Tailwind ships as a Vite plugin — @tailwindcss/vite. You add it to your vite.config.js and import tailwindcss in your CSS. No PostCSS config, no autoprefixer setup. It just works. This is the setup you're probably already using if you started with the latest templates.`,
            },
            {
                type: 'paragraph',
                text: `The plugin handles everything: scanning your source files, generating utilities on demand, and injecting styles — all through Vite's native pipeline. The result is a dramatically simpler setup and faster HMR.`,
            },
        ],
        tags: ['Tailwind CSS', 'CSS', 'Frontend', 'Vite', 'Performance'],
        related: ['react-server-components'],
    },
    {
        slug: 'performance-optimization',
        title: 'From 3s to 0.8s: Our Performance Optimization Playbook',
        category: 'Performance',
        color: '#00ff88',
        date: 'November 20, 2024',
        read: '10 min',
        author: { name: 'Arjun Verma', role: 'Lead Developer', avatar: 'AV', color: '#00d4ff' },
        excerpt: 'A real case study of how we took a React app from 3 second load times to under 800ms using code splitting, lazy loading, and CDN strategies.',
        content: [
            {
                type: 'intro',
                text: `Last quarter, we took a client's React dashboard from a 3.2 second LCP to 0.8 seconds. No framework migration, no full rewrite — just systematic analysis and targeted fixes. Here's exactly what we did, in order of impact.`,
            },
            {
                type: 'heading',
                text: 'Step 1: Measure Before You Optimize',
            },
            {
                type: 'paragraph',
                text: `Before touching any code, we ran Lighthouse, WebPageTest, and Chrome DevTools Performance panel. The culprits were clear: a 1.4MB JavaScript bundle, 12 render-blocking scripts, unoptimized images, and no caching headers. Always measure first — optimization without measurement is guesswork.`,
            },
            {
                type: 'heading',
                text: 'Step 2: Code Splitting Everything',
            },
            {
                type: 'paragraph',
                text: `The app was importing everything upfront. We implemented route-based code splitting with React.lazy() and Suspense, reducing the initial bundle from 1.4MB to 180KB. Users now only download code for the page they're visiting.`,
            },
            {
                type: 'code',
                lang: 'jsx',
                text: `// Before - everything loaded upfront
import Dashboard from './Dashboard';
import Reports from './Reports';
import Settings from './Settings';

// After - loaded on demand
const Dashboard = lazy(() => import('./Dashboard'));
const Reports = lazy(() => import('./Reports'));
const Settings = lazy(() => import('./Settings'));

// Wrap routes in Suspense
<Suspense fallback={<PageSkeleton />}>
  <Routes>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/reports" element={<Reports />} />
  </Routes>
</Suspense>`,
            },
            {
                type: 'heading',
                text: 'Step 3: Image Optimization',
            },
            {
                type: 'paragraph',
                text: `Images were the second biggest issue — JPEG files up to 800KB each. We converted everything to WebP (60-80% smaller), added explicit width/height attributes to eliminate layout shift, and implemented lazy loading with loading="lazy". Alone, this saved 2.1MB on the homepage.`,
            },
            {
                type: 'callout',
                text: `📊 Result breakdown: Bundle optimization saved 1.2s. Image optimization saved 0.8s. CDN + caching saved 0.4s. Total: 2.4 seconds faster.`,
            },
            {
                type: 'heading',
                text: 'Step 4: CDN and Caching Headers',
            },
            {
                type: 'paragraph',
                text: `The app was served from a single origin server in Mumbai. We moved static assets to CloudFront with aggressive caching (1 year for hashed assets, 5 minutes for HTML). Users globally saw 200-400ms reduction in asset load times just from geographic proximity.`,
            },
            {
                type: 'paragraph',
                text: `The key insight: performance optimization is almost always about doing less — less JavaScript, fewer requests, smaller images, closer servers. Start with the biggest wins and measure after every change.`,
            },
        ],
        tags: ['Performance', 'React', 'Optimization', 'Core Web Vitals', 'CDN'],
        related: ['react-server-components', 'tailwindcss-v4'],
    },
];

const allBlogsMap = Object.fromEntries(blogs.map(b => [b.slug, b]));

export default function BlogDetailPage() {
    const { slug } = useParams();
    const post = allBlogsMap[slug];
    const [copied, setCopied] = useState(false);

    if (!post) {
        return (
            <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-primary)' }}>
                <div style={{ textAlign: 'center' }}>
                    <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '16px' }}>Post Not Found</h2>
                    <Link to="/blog" style={{ color: 'var(--accent)', textDecoration: 'none', fontFamily: 'Syne, sans-serif', fontWeight: '600' }}>← Back to Blog</Link>
                </div>
            </section>
        );
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        toast.success('Link copied!');
        setTimeout(() => setCopied(false), 2000);
    };

    const relatedPosts = post.related?.map(s => allBlogsMap[s]).filter(Boolean) || [];

    return (
        <>
            {/* Hero */}
            <section style={{
                paddingTop: '140px', paddingBottom: '60px',
                background: 'var(--bg-primary)', position: 'relative', overflow: 'hidden',
            }}>
                <div style={{
                    position: 'absolute', inset: 0,
                    background: `radial-gradient(ellipse 60% 50% at 50% 0%, ${post.color}08 0%, transparent 60%)`,
                    pointerEvents: 'none',
                }} />

                <div className="container-custom" style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
                    {/* Back */}
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                        <Link to="/blog" style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            color: 'var(--text-secondary)', textDecoration: 'none',
                            fontFamily: 'Syne, sans-serif', fontWeight: '600', fontSize: '0.85rem',
                            marginBottom: '40px', transition: 'color 0.2s',
                        }}
                            onMouseEnter={e => e.currentTarget.style.color = post.color}
                            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                        >
                            <FiArrowLeft /> Back to Blog
                        </Link>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        {/* Category */}
                        <span style={{
                            display: 'inline-block', marginBottom: '20px',
                            padding: '5px 14px', background: `${post.color}15`,
                            border: `1px solid ${post.color}35`, borderRadius: '20px',
                            fontSize: '0.72rem', fontFamily: 'Syne, sans-serif', fontWeight: '700',
                            letterSpacing: '0.1em', textTransform: 'uppercase', color: post.color,
                        }}>{post.category}</span>

                        <h1 style={{
                            fontFamily: 'Syne, sans-serif', fontWeight: '800',
                            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                            lineHeight: '1.15', letterSpacing: '-0.03em',
                            color: 'var(--text-primary)', marginBottom: '24px',
                        }}>{post.title}</h1>

                        <p style={{
                            color: 'var(--text-secondary)', fontSize: '1.1rem',
                            lineHeight: '1.7', marginBottom: '36px',
                        }}>{post.excerpt}</p>

                        {/* Meta row */}
                        <div style={{
                            display: 'flex', flexWrap: 'wrap', alignItems: 'center',
                            justifyContent: 'space-between', gap: '20px',
                            paddingBottom: '32px', borderBottom: '1px solid var(--border)',
                        }}>
                            {/* Author */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{
                                    width: '44px', height: '44px', borderRadius: '12px',
                                    background: `${post.author.color}20`, border: `1px solid ${post.author.color}40`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.8rem',
                                    color: post.author.color,
                                }}>{post.author.avatar}</div>
                                <div>
                                    <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.9rem', color: 'var(--text-primary)' }}>{post.author.name}</div>
                                    <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>{post.author.role}</div>
                                </div>
                            </div>

                            {/* Date + Read time + Share */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                                    <FiCalendar style={{ fontSize: '12px' }} /> {post.date}
                                </span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                                    <FiClock style={{ fontSize: '12px' }} /> {post.read} read
                                </span>

                                {/* Share buttons */}
                                <div style={{ display: 'flex', gap: '8px' }}>
                                    {[
                                        { icon: FiTwitter, href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`, label: 'Twitter' },
                                        { icon: FiLinkedin, href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, label: 'LinkedIn' },
                                    ].map(({ icon: Icon, href, label }) => (
                                        <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={`Share on ${label}`} style={{
                                            width: '34px', height: '34px', borderRadius: '8px',
                                            background: 'var(--bg-card)', border: '1px solid var(--border)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            color: 'var(--text-muted)', textDecoration: 'none', fontSize: '14px',
                                            transition: 'all 0.2s',
                                        }}
                                            onMouseEnter={e => { e.currentTarget.style.color = post.color; e.currentTarget.style.borderColor = `${post.color}40`; }}
                                            onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
                                        ><Icon /></a>
                                    ))}
                                    <button onClick={handleCopy} title="Copy link" style={{
                                        width: '34px', height: '34px', borderRadius: '8px',
                                        background: copied ? `${post.color}15` : 'var(--bg-card)',
                                        border: copied ? `1px solid ${post.color}40` : '1px solid var(--border)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: copied ? post.color : 'var(--text-muted)',
                                        cursor: 'pointer', fontSize: '14px', transition: 'all 0.2s',
                                    }}>
                                        <FiCopy />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Article content */}
            <section style={{ paddingTop: '60px', paddingBottom: '80px', background: 'var(--bg-primary)' }}>
                <div className="container-custom" style={{ maxWidth: '800px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                    >
                        {post.content.map((block, i) => {
                            if (block.type === 'intro') return (
                                <p key={i} style={{
                                    fontSize: '1.1rem', lineHeight: '1.85', color: 'var(--text-secondary)',
                                    marginBottom: '36px', paddingLeft: '20px',
                                    borderLeft: `3px solid ${post.color}`,
                                    fontStyle: 'italic',
                                }}>{block.text}</p>
                            );

                            if (block.type === 'heading') return (
                                <h2 key={i} style={{
                                    fontFamily: 'Syne, sans-serif', fontWeight: '700',
                                    fontSize: '1.4rem', color: 'var(--text-primary)',
                                    marginTop: '48px', marginBottom: '18px',
                                    letterSpacing: '-0.02em', lineHeight: '1.3',
                                }}>{block.text}</h2>
                            );

                            if (block.type === 'paragraph') return (
                                <p key={i} style={{
                                    fontSize: '0.975rem', lineHeight: '1.9',
                                    color: 'var(--text-secondary)', marginBottom: '20px',
                                }}>{block.text}</p>
                            );

                            if (block.type === 'callout') return (
                                <div key={i} style={{
                                    background: `${post.color}08`,
                                    border: `1px solid ${post.color}25`,
                                    borderRadius: '14px', padding: '20px 24px',
                                    marginBottom: '28px', marginTop: '8px',
                                    color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.7',
                                }}>
                                    {block.text}
                                </div>
                            );

                            if (block.type === 'code') return (
                                <div key={i} style={{
                                    background: '#0a0f1a',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    borderRadius: '14px', overflow: 'hidden',
                                    marginBottom: '28px', marginTop: '8px',
                                }}>
                                    {/* Code header */}
                                    <div style={{
                                        display: 'flex', alignItems: 'center', gap: '8px',
                                        padding: '12px 18px', borderBottom: '1px solid rgba(255,255,255,0.06)',
                                        background: 'rgba(255,255,255,0.02)',
                                    }}>
                                        {['#ff5f57', '#ffbd2e', '#28ca41'].map(c => (
                                            <div key={c} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />
                                        ))}
                                        <span style={{ marginLeft: '8px', color: 'var(--text-muted)', fontSize: '0.75rem', fontFamily: 'monospace' }}>
                                            {block.lang}
                                        </span>
                                    </div>
                                    <pre style={{
                                        margin: 0, padding: '24px',
                                        fontSize: '0.83rem', lineHeight: '1.7',
                                        color: '#c9d1d9', fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                                        overflowX: 'auto', whiteSpace: 'pre',
                                    }}>
                                        <code>{block.text}</code>
                                    </pre>
                                </div>
                            );

                            return null;
                        })}

                        {/* Tags */}
                        <div style={{
                            marginTop: '60px', paddingTop: '32px',
                            borderTop: '1px solid var(--border)',
                            display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px',
                        }}>
                            <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                                Tags:
                            </span>
                            {post.tags.map(tag => (
                                <span key={tag} style={{
                                    padding: '5px 12px',
                                    background: 'rgba(255,255,255,0.04)',
                                    border: '1px solid var(--border)',
                                    borderRadius: '6px', fontSize: '0.78rem',
                                    color: 'var(--text-secondary)',
                                    fontFamily: 'DM Sans, sans-serif',
                                }}>{tag}</span>
                            ))}
                        </div>

                        {/* Author card */}
                        <div style={{
                            marginTop: '40px',
                            background: 'var(--bg-card)', border: '1px solid var(--border)',
                            borderRadius: '20px', padding: '28px 32px',
                            display: 'flex', alignItems: 'flex-start', gap: '18px',
                        }}>
                            <div style={{
                                width: '56px', height: '56px', borderRadius: '14px', flexShrink: 0,
                                background: `${post.author.color}20`, border: `2px solid ${post.author.color}40`,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontFamily: 'Syne, sans-serif', fontWeight: '800', fontSize: '1.1rem',
                                color: post.author.color,
                            }}>{post.author.avatar}</div>
                            <div>
                                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.95rem', color: 'var(--text-primary)', marginBottom: '3px' }}>{post.author.name}</div>
                                <div style={{ color: post.author.color, fontSize: '0.78rem', fontFamily: 'Syne, sans-serif', fontWeight: '600', marginBottom: '8px' }}>{post.author.role} @ Nexora</div>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.84rem', lineHeight: '1.6' }}>
                                    Passionate about building performant, beautiful web products. Writing about code, design, and shipping things that work.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section style={{ padding: '60px 0 100px', background: 'var(--bg-secondary)' }}>
                    <div className="container-custom" style={{ maxWidth: '800px' }}>
                        <h3 style={{
                            fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '1.2rem',
                            color: 'var(--text-primary)', marginBottom: '28px',
                        }}>Related Articles</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
                            {relatedPosts.map((related, i) => (
                                <motion.div
                                    key={related.slug}
                                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                    className="card-hover"
                                    style={{
                                        background: 'var(--bg-card)', border: '1px solid var(--border)',
                                        borderRadius: '16px', padding: '24px',
                                    }}
                                >
                                    <span style={{
                                        display: 'inline-block', marginBottom: '12px',
                                        padding: '3px 10px', background: `${related.color}12`,
                                        border: `1px solid ${related.color}25`, borderRadius: '20px',
                                        fontSize: '0.68rem', fontFamily: 'Syne, sans-serif', fontWeight: '700',
                                        letterSpacing: '0.08em', textTransform: 'uppercase', color: related.color,
                                    }}>{related.category}</span>
                                    <h4 style={{
                                        fontFamily: 'Syne, sans-serif', fontWeight: '700', fontSize: '0.95rem',
                                        color: 'var(--text-primary)', marginBottom: '10px', lineHeight: '1.4',
                                    }}>{related.title}</h4>
                                    <Link to={`/blog/${related.slug}`} style={{
                                        display: 'inline-flex', alignItems: 'center', gap: '5px',
                                        color: related.color, textDecoration: 'none',
                                        fontFamily: 'Syne, sans-serif', fontWeight: '600', fontSize: '0.8rem',
                                    }}>
                                        Read Article →
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}