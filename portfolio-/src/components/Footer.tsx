export default function Footer() {
  return (
    <footer className="py-12 border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-gray-600 text-sm gap-6">
        <div className="font-medium">
          © {new Date().getFullYear()} Prathamesh Nagore. All rights reserved.
        </div>

        <div className="flex items-center gap-1.5 font-semibold">
          Built with <span className="text-[var(--color-primary-blue)]">React</span> & <span className="text-[var(--color-primary-indigo)]">Tailwind CSS</span>
        </div>
      </div>
    </footer>
  )
}
