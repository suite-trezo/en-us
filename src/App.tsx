import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Wallet, ChevronRight, ExternalLink } from 'lucide-react';
import CryptoTicker from './components/CryptoTicker';

function App() {
  const keywords = [
    "Trezor Suite Security", "Trezor Suite Wallet", "Trezor Suite Bitcoin", "Trezor Suite Ethereum",
    "Trezor Suite Storage", "Trezor Suite Protection", "Trezor Suite Backup", "Trezor Suite Recovery",
    "Trezor Suite Password", "Trezor Suite Encryption", "Trezor Suite Management", "Trezor Suite Interface",
    "Trezor Suite Dashboard", "Trezor Suite Features", "Trezor Suite Updates", "Trezor Suite Download",
    "Trezor Suite Guide", "Trezor Suite Tutorial", "Trezor Suite Setup", "Trezor Suite Installation",
    "Trezor Suite Support", "Trezor Suite Help", "Trezor Suite Account", "Trezor Suite Balance",
    "Trezor Suite Transfer", "Trezor Suite Exchange", "Trezor Suite Trading", "Trezor Suite Portfolio",
    "Trezor Suite Analytics", "Trezor Suite Charts", "Trezor Suite Market", "Trezor Suite Price",
    "Trezor Suite Network", "Trezor Suite Blockchain", "Trezor Suite Crypto", "Trezor Suite Assets",
    "Trezor Suite DeFi", "Trezor Suite NFT", "Trezor Suite Staking", "Trezor Suite Yield",
    "Trezor Suite Hardware", "Trezor Suite Software", "Trezor Suite Desktop", "Trezor Suite Mobile",
    "Trezor Suite Web", "Trezor Suite Cloud", "Trezor Suite Sync", "Trezor Suite Update",
    "Trezor Suite Firmware", "Trezor Suite Version", "Trezor Suite Release", "Trezor Suite Beta",
    "Trezor Suite Pro", "Trezor Suite Premium", "Trezor Suite Standard", "Trezor Suite Basic",
    "Trezor Suite Advanced", "Trezor Suite Expert", "Trezor Suite Beginner", "Trezor Suite User",
    "Trezor Suite Client", "Trezor Suite Platform", "Trezor Suite System", "Trezor Suite Tool",
    "Trezor Suite App", "Trezor Suite Application", "Trezor Suite Program", "Trezor Suite Software",
    "Trezor Suite Device", "Trezor Suite Hardware", "Trezor Suite Connection", "Trezor Suite Link",
    "Trezor Suite Bridge", "Trezor Suite Protocol", "Trezor Suite Standard", "Trezor Suite Integration",
    "Trezor Suite API", "Trezor Suite Development", "Trezor Suite Code", "Trezor Suite Open Source",
    "Trezor Suite Community", "Trezor Suite Forum", "Trezor Suite Discussion", "Trezor Suite News",
    "Trezor Suite Blog", "Trezor Suite Article", "Trezor Suite Guide", "Trezor Suite Documentation",
    "Trezor Suite Manual", "Trezor Suite Instructions", "Trezor Suite Steps", "Trezor Suite Process",
    "Trezor Suite Method", "Trezor Suite Approach", "Trezor Suite Solution", "Trezor Suite Answer",
    "Trezor Suite Question", "Trezor Suite Problem", "Trezor Suite Issue", "Trezor Suite Resolution",
    "Trezor Suite Fix", "Trezor Suite Repair", "Trezor Suite Maintenance", "Trezor Suite Care",
    "Trezor Suite Service", "Trezor Suite Support", "Trezor Suite Assistance", "Trezor Suite Help"
  ];

  return (
    <div className="min-h-screen gradient-bg text-white">
      <CryptoTicker />
      
      <header className="container mx-auto px-4 py-20 text-center">
        <motion.h1 
          className="text-6xl font-bold mb-6 text-glow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to Trezor Suite
        </motion.h1>
        <motion.p 
          className="text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          The Next Generation of Cryptocurrency Security
        </motion.p>
      </header>

      <main className="container mx-auto px-4">
        <section className="mb-20">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center text-glow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Why Choose Trezor Suite?
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Military-Grade Security",
                description: "Protect your digital assets with the most advanced security features available."
              },
              {
                icon: <Lock className="w-12 h-12" />,
                title: "Complete Privacy",
                description: "Your keys, your coins. Maintain full control over your cryptocurrency."
              },
              {
                icon: <Wallet className="w-12 h-12" />,
                title: "Intuitive Interface",
                description: "Manage your portfolio with ease through our user-friendly dashboard."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-white/10 backdrop-blur-lg card-glow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="mb-4 text-blue-400">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center text-glow">Latest Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="p-6 rounded-xl bg-white/10 backdrop-blur-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h3 className="text-2xl font-bold mb-4">Enhanced Security Protocols</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2 text-blue-400" />
                  Advanced encryption algorithms
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2 text-blue-400" />
                  Multi-signature support
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2 text-blue-400" />
                  Biometric authentication
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="p-6 rounded-xl bg-white/10 backdrop-blur-lg"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h3 className="text-2xl font-bold mb-4">Integrated DeFi Tools</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2 text-blue-400" />
                  Direct swap integration
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2 text-blue-400" />
                  Yield farming dashboard
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 mr-2 text-blue-400" />
                  NFT portfolio tracking
                </li>
              </ul>
            </motion.div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold mb-8 text-center text-glow">Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Documentation",
                link: "https://docs.trezor.io",
                description: "Comprehensive guides and API documentation"
              },
              {
                title: "Community Forum",
                link: "https://forum.trezor.io",
                description: "Join discussions with other Trezor users"
              },
              {
                title: "Support Center",
                link: "https://trezor.io/support",
                description: "Get help from our dedicated support team"
              }
            ].map((resource, index) => (
              <motion.a
                key={index}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-xl bg-white/10 backdrop-blur-lg hover:bg-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">{resource.title}</h3>
                  <ExternalLink className="w-5 h-5" />
                </div>
                <p className="text-gray-300">{resource.description}</p>
              </motion.a>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-black/20 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4">
          <p className="text-gray-400 text-center mb-8">© 2024 Trezor Suite. All rights reserved.</p>
          <div className="text-xs text-gray-500 text-center leading-relaxed">
            {keywords.map((keyword, index) => (
              <React.Fragment key={index}>
                <a 
                  href="https://trezor.io/trezor-suite" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  {keyword}
                </a>
                {index < keywords.length - 1 && <span className="mx-1">|</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;