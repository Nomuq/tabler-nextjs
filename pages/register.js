export default function Register() {
  return (
    <div className="flex-fill d-flex flex-column justify-content-center">
      <div className="container-tight py-6">
        <div className="text-center mb-4">
          <img src="./static/logo.svg" height={36} alt />
        </div>
        <form className="card card-md" action="." method="get">
          <div className="card-body">
            <h2 className="mb-5 text-center">Create new account</h2>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <div className="input-group input-group-flat">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
                <span className="input-group-text">
                  <a
                    href="#"
                    className="link-secondary"
                    title="Show password"
                    data-toggle="tooltip"
                  >
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
                      <circle cx={12} cy={12} r={2} />
                      <path d="M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2" />
                      <path d="M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2" />
                    </svg>
                  </a>
                </span>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-check">
                <input type="checkbox" className="form-check-input" />
                <span className="form-check-label">
                  Agree the{" "}
                  <a href="./terms-of-service.html" tabIndex={-1}>
                    terms and policy
                  </a>
                  .
                </span>
              </label>
            </div>
            <div className="form-footer">
              <button type="submit" className="btn btn-primary btn-block">
                Create new account
              </button>
            </div>
          </div>
        </form>
        <div className="text-center text-muted">
          Already have account?{" "}
          <a href="./login" tabIndex={-1}>
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
}
