import { Facebook, Twitter, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-[#4B9EDC] rounded-xl flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <span className="text-2xl font-bold text-white">Solutions</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Empowering businesses with next-generation AI solutions. 
              Transform your enterprise with cutting-edge artificial intelligence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#4B9EDC] transition-colors duration-200 p-2 bg-gray-800 rounded-lg hover:bg-gray-700">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#4B9EDC] transition-colors duration-200 p-2 bg-gray-800 rounded-lg hover:bg-gray-700">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#4B9EDC] transition-colors duration-200 p-2 bg-gray-800 rounded-lg hover:bg-gray-700">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#4B9EDC] transition-colors duration-200 p-2 bg-gray-800 rounded-lg hover:bg-gray-700">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Custom ML Models</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">MLOps Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Data Engineering</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">AI Strategy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Consulting</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xl font-bold mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">API Reference</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">White Papers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-3">
                  <Mail className="w-5 h-5 text-[#4B9EDC]" />
                </div>
                <span className="text-gray-400">hello@ai-solutions.com</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-3">
                  <Phone className="w-5 h-5 text-[#4B9EDC]" />
                </div>
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-3 mt-1">
                  <MapPin className="w-5 h-5 text-[#4B9EDC]" />
                </div>
                <span className="text-gray-400">
                  123 Innovation Drive<br />
                  San Francisco, CA 94102
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 AI Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}