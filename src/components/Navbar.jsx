import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router'

const Navbar = () => {

    
  const menuItems = {
    platform: {
      title: 'Platform',
      sections: [
        {
          title: 'BUILD',
          items: [
            { name: 'Design', desc: 'Build high-performing sites' },
            { name: 'Edit mode', desc: 'Empower your content team' },
            { name: 'Interactions', desc: 'Craft immersive experiences' },
            { name: 'Page building', desc: 'Launch simple landing pages quickly', isNew: true },
          ]
        },
        {
          title: 'MANAGE',
          items: [
            { name: 'CMS', desc: 'Manage content at scale' },
            { name: 'Hosting', desc: 'Host and scale your site without the hassle' },
            { name: 'Localization', desc: 'Customize your site for a worldwide audience' },
            { name: 'Security', desc: 'Ensure your site stays safe' },
          ]
        },
        {
          title: 'OPTIMIZE',
          items: [
            { name: 'Analyze', desc: 'Understand how your site performs', isNew: true },
            { name: 'Optimize', desc: 'Maximize conversions with testing', isNew: true },
            { name: 'SEO', desc: 'Grow your reach with fine-tuned controls' },
          ]
        },
      ]
    },
    solutions: {
      title: 'Solutions',
      items: [
        { name: 'For Enterprise', desc: 'Scale your business' },
        { name: 'For Startups', desc: 'Move faster with CodeTutor' },
        { name: 'For Agencies', desc: 'Win more clients' },
        { name: 'For Marketing', desc: 'Drive more growth' },
      ]
    },
    resources: {
      title: 'Resources',
      items: [
        { name: 'Showcase', desc: 'Get inspired by the community' },
        { name: 'Blog', desc: 'Read latest news and articles' },
        { name: 'Documentation', desc: 'Learn from our resources' },
        { name: 'Community', desc: 'Join the conversation' },
      ]
    }
  };
  return (
    <nav className='bg-black text-white fixed top-0 left-0 right-0 border-white/10'>
        <div className='container mx-auto px-4 py-2 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-16'>
                {/* logo */}
                <div>
                    <Link to='/' className='text-xl font-bold'><span className='text-blue-500'>CodeTutor</span> UI</Link>
                </div>

                {/* desktop menu */}
                <div>
                   {
                    Object.keys(menuItems).map((key) => (
                        <div>
                            <button>{menuItems[key].title}</button>
                            <MdKeyboardArrowDown/>
                        </div>
    
                    ))
                    
                    }
                </div>

                {/* auth button */}
                <div>Buttons</div>

                {/* mobile menu */}
                <div className='md:hidden'>mobile menu</div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar