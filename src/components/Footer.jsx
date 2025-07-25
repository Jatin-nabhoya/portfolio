import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-32 border-t border-[#ABB2BF]">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Logo and Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-6 h-6 border border-[#C778DD] grid grid-cols-2">
                <div className="bg-[#C778DD]"></div>
              </div>
              <span className="font-mono text-[#ABB2BF]">jvnabhoya.work@gmail.com</span>
            </div>
            <p className="text-[#ABB2BF] max-w-md">
            I&#39;m Jatin Nabhoya. Data Scientist & Machine Learning Engineer based in United States.
            </p>
          </div>

          {/* Media Section */}
          <div className="space-y-4">
            <h3 className="text-white font-mono">Media</h3>
            <div className="flex gap-4">
            <a 
                href="mailto:jvnabhoya.work@gmail.com"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#ABB2BF] hover:text-[#C778DD] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
              </a>
              <a 
                href="https://github.com/jatin-nabhoya" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#ABB2BF] hover:text-[#C778DD] transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/in/jatin-nabhoya" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#ABB2BF] hover:text-[#C778DD] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              <a 
                href="https://medium.com/@jvnabhoya"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#ABB2BF] hover:text-[#C778DD] transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <rect width="512" height="512" rx="100" fill="currentColor" />
                    <text x="95" y="360" fontFamily="Georgia, serif" fontSize="300" fill="black">Me</text>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-[#ABB2BF] text-sm mt-8 text-center">
          © Copyright 2025. Made by Jatin
        </p>
      </div>
    </footer>
  );
};

export default Footer; 
