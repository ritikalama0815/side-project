"use client"

export function AnimatedFlorals() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating floral elements */}
      <div className="absolute top-20 left-10 animate-float opacity-20">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M40 10C40 10 30 20 30 30C30 35.5228 34.4772 40 40 40C45.5228 40 50 35.5228 50 30C50 20 40 10 40 10Z"
            fill="currentColor"
            className="text-accent"
          />
          <path
            d="M40 40C40 40 50 50 50 60C50 65.5228 45.5228 70 40 70C34.4772 70 30 65.5228 30 60C30 50 40 40 40 40Z"
            fill="currentColor"
            className="text-accent"
          />
          <path
            d="M40 40C40 40 30 50 20 50C14.4772 50 10 45.5228 10 40C10 34.4772 14.4772 30 20 30C30 30 40 40 40 40Z"
            fill="currentColor"
            className="text-accent"
          />
          <path
            d="M40 40C40 40 50 30 60 30C65.5228 30 70 34.4772 70 40C70 45.5228 65.5228 50 60 50C50 50 40 40 40 40Z"
            fill="currentColor"
            className="text-accent"
          />
          <circle cx="40" cy="40" r="6" fill="currentColor" className="text-primary" />
        </svg>
      </div>

      <div className="absolute top-1/4 right-20 animate-float-slow opacity-15">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M50 15C50 15 38 28 38 40C38 46.6274 43.3726 52 50 52C56.6274 52 62 46.6274 62 40C62 28 50 15 50 15Z"
            fill="currentColor"
            className="text-accent"
          />
          <path
            d="M50 52C50 52 62 65 62 77C62 83.6274 56.6274 89 50 89C43.3726 89 38 83.6274 38 77C38 65 50 52 50 52Z"
            fill="currentColor"
            className="text-accent"
          />
          <path
            d="M50 52C50 52 38 65 26 65C19.3726 65 14 59.6274 14 53C14 46.3726 19.3726 41 26 41C38 41 50 52 50 52Z"
            fill="currentColor"
            className="text-accent"
          />
          <path
            d="M50 52C50 52 62 41 74 41C80.6274 41 86 46.3726 86 53C86 59.6274 80.6274 65 74 65C62 65 50 52 50 52Z"
            fill="currentColor"
            className="text-accent"
          />
          <circle cx="50" cy="52" r="8" fill="currentColor" className="text-primary" />
        </svg>
      </div>

      <div className="absolute bottom-40 left-1/4 animate-float-slower opacity-20">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M30 8C30 8 22 16 22 24C22 28.4183 25.5817 32 30 32C34.4183 32 38 28.4183 38 24C38 16 30 8 30 8Z"
            fill="currentColor"
            className="text-accent"
          />
          <path
            d="M30 32C30 32 38 40 38 48C38 52.4183 34.4183 56 30 56C25.5817 56 22 52.4183 22 48C22 40 30 32 30 32Z"
            fill="currentColor"
            className="text-accent"
          />
          <path
            d="M30 32C30 32 22 40 14 40C9.58172 40 6 36.4183 6 32C6 27.5817 9.58172 24 14 24C22 24 30 32 30 32Z"
            fill="currentColor"
            className="text-accent"
          />
          <path
            d="M30 32C30 32 38 24 46 24C50.4183 24 54 27.5817 54 32C54 36.4183 50.4183 40 46 40C38 40 30 32 30 32Z"
            fill="currentColor"
            className="text-accent"
          />
          <circle cx="30" cy="32" r="5" fill="currentColor" className="text-primary" />
        </svg>
      </div>

      <div className="absolute top-1/2 left-1/3 animate-float opacity-10">
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M45 12C45 12 34 24 34 35C34 41.0751 38.9249 46 45 46C51.0751 46 56 41.0751 56 35C56 24 45 12 45 12Z"
            fill="currentColor"
            className="text-accent"
          />
          <path
            d="M45 46C45 46 56 58 56 69C56 75.0751 51.0751 80 45 80C38.9249 80 34 75.0751 34 69C34 58 45 46 45 46Z"
            fill="currentColor"
            className="text-accent"
          />
          <path
            d="M45 46C45 46 34 58 23 58C16.9249 58 12 53.0751 12 47C12 40.9249 16.9249 36 23 36C34 36 45 46 45 46Z"
            fill="currentColor"
            className="text-accent"
          />
          <path
            d="M45 46C45 46 56 36 67 36C73.0751 36 78 40.9249 78 47C78 53.0751 73.0751 58 67 58C56 58 45 46 45 46Z"
            fill="currentColor"
            className="text-accent"
          />
          <circle cx="45" cy="46" r="7" fill="currentColor" className="text-primary" />
        </svg>
      </div>

      <div className="absolute bottom-20 right-1/4 animate-float-slow opacity-15">
        <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M35 9C35 9 26 18 26 27C26 31.9706 30.0294 36 35 36C39.9706 36 44 31.9706 44 27C44 18 35 9 35 9Z"
            fill="currentColor"
            className="text-accent"
          />
          <path
            d="M35 36C35 36 44 45 44 54C44 58.9706 39.9706 63 35 63C30.0294 63 26 58.9706 26 54C26 45 35 36 35 36Z"
            fill="currentColor"
            className="text-accent"
          />
          <path
            d="M35 36C35 36 26 45 17 45C12.0294 45 8 40.9706 8 36C8 31.0294 12.0294 27 17 27C26 27 35 36 35 36Z"
            fill="currentColor"
            className="text-accent"
          />
          <path
            d="M35 36C35 36 44 27 53 27C57.9706 27 62 31.0294 62 36C62 40.9706 57.9706 45 53 45C44 45 35 36 35 36Z"
            fill="currentColor"
            className="text-accent"
          />
          <circle cx="35" cy="36" r="6" fill="currentColor" className="text-primary" />
        </svg>
      </div>
    </div>
  )
}
