export default function Error404() {
  return (
    <div className="antialiased border-top-wide border-primary d-flex flex-column">
      <div className="flex-fill d-flex align-items-center justify-content-center">
        <div className="container-tight py-6">
          <div className="empty">
            <div className="empty-icon">
              <div className="display-4">400</div>
            </div>
            <p className="empty-title h3">Oops… You just found an error page</p>
            <p className="empty-subtitle text-muted">
              We are sorry but your request contains bad syntax and cannot be
              fulfilled
            </p>
            <div className="empty-action">
              <a href="./." className="btn btn-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1={5} y1={12} x2={19} y2={12} />
                  <line x1={5} y1={12} x2={11} y2={18} />
                  <line x1={5} y1={12} x2={11} y2={6} />
                </svg>
                Take me home
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Libs JS */}
      {/* Tabler Core */}
    </div>
  );
}
