export default function index() {
  return (
    <div>
      {/* <!-- Libs JS --> */}
      <script src="./dist/libs/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
      {/* <script src="./dist/libs/jquery/dist/jquery.slim.min.js"></script>
      <script src="./dist/libs/apexcharts/dist/apexcharts.min.js"></script>
      <script src="./dist/libs/jqvmap/dist/jquery.vmap.min.js"></script>
      <script src="./dist/libs/jqvmap/dist/maps/jquery.vmap.world.js"></script>
      <script src="./dist/libs/peity/jquery.peity.min.js"></script> */}
      {/* <!-- Tabler Core --> */}
      <script src="./dist/js/tabler.min.js"></script>

      <div className="page">
        <header className="navbar navbar-expand-md navbar-light">
          <div className="container-xl">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbar-menu"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <a
              href="."
              className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pr-0 pr-md-3"
            >
              <img
                src="./static/logo.svg"
                alt="Tabler"
                className="navbar-brand-image"
              />
            </a>
            <div className="navbar-nav flex-row order-md-last">
              <div className="nav-item dropdown d-none d-md-flex mr-3">
                <a
                  href="#"
                  className="nav-link px-0"
                  data-toggle="dropdown"
                  tabIndex={-1}
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
                    <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                    <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                  </svg>
                  <span className="badge bg-red" />
                </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-card">
                  <div className="card">
                    <div className="card-body">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Accusamus ad amet consectetur exercitationem fugiat in
                      ipsa ipsum, natus odio quidem quod repudiandae sapiente.
                      Amet debitis et magni maxime necessitatibus ullam.
                    </div>
                  </div>
                </div>
              </div>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link d-flex lh-1 text-reset p-0"
                  data-toggle="dropdown"
                >
                  <span
                    className="avatar"
                    style={{
                      backgroundImage: "url(./static/avatars/000m.jpg)",
                    }}
                  />
                  <div className="d-none d-xl-block pl-2">
                    <div>Paweł Kuna</div>
                    <div className="mt-1 small text-muted">UI Designer</div>
                  </div>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon dropdown-item-icon"
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
                      <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <circle cx={12} cy={12} r={3} />
                    </svg>
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon dropdown-item-icon"
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
                      <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                      <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                      <line x1={16} y1={5} x2={19} y2={8} />
                    </svg>
                    Another action
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon dropdown-item-icon"
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
                      <line x1={12} y1={5} x2={12} y2={19} />
                      <line x1={5} y1={12} x2={19} y2={12} />
                    </svg>
                    Separated link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="navbar-expand-md">
          <div className="collapse navbar-collapse" id="navbar-menu">
            <div className="navbar navbar-light">
              <div className="container-xl">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="./index.html">
                      <span className="nav-link-icon d-md-none d-lg-inline-block">
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
                          <polyline points="5 12 3 12 12 3 21 12 19 12" />
                          <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                          <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                        </svg>
                      </span>
                      <span className="nav-link-title">Home</span>
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#navbar-base"
                      data-toggle="dropdown"
                      role="button"
                      aria-expanded="false"
                    >
                      <span className="nav-link-icon d-md-none d-lg-inline-block">
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
                          <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" />
                          <line x1={12} y1={12} x2={20} y2="7.5" />
                          <line x1={12} y1={12} x2={12} y2={21} />
                          <line x1={12} y1={12} x2={4} y2="7.5" />
                          <line x1={16} y1="5.25" x2={8} y2="9.75" />
                        </svg>
                      </span>
                      <span className="nav-link-title">User Interface</span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-columns  dropdown-menu-columns-2">
                      <li>
                        <a className="dropdown-item" href="./empty.html">
                          Empty page
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./blank.html">
                          Blank page
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./buttons.html">
                          Buttons
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./cards.html">
                          Cards
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./dropdowns.html">
                          Dropdowns
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./icons.html">
                          Icons
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./modals.html">
                          Modals
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./maps.html">
                          Maps
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./maps-vector.html">
                          Vector maps
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./navigation.html">
                          Navigation
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./charts.html">
                          Charts
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./tables.html">
                          Tables
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./calendar.html">
                          Calendar
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./carousel.html">
                          Carousel
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./lists.html">
                          Lists
                        </a>
                      </li>
                      <li className="dropright">
                        <a
                          className="dropdown-item dropdown-toggle"
                          href="#sidebar-authentication"
                          data-toggle="dropdown"
                          role="button"
                          aria-expanded="false"
                        >
                          Authentication
                        </a>
                        <div className="dropdown-menu">
                          <a href="./sign-in.html" className="dropdown-item">
                            Sign in
                          </a>
                          <a href="./sign-up.html" className="dropdown-item">
                            Sign up
                          </a>
                          <a
                            href="./forgot-password.html"
                            className="dropdown-item"
                          >
                            Forgot password
                          </a>
                          <a
                            href="./terms-of-service.html"
                            className="dropdown-item"
                          >
                            Terms of service
                          </a>
                        </div>
                      </li>
                      <li className="dropright">
                        <a
                          className="dropdown-item dropdown-toggle"
                          href="#sidebar-error"
                          data-toggle="dropdown"
                          role="button"
                          aria-expanded="false"
                        >
                          Error pages
                        </a>
                        <div className="dropdown-menu">
                          <a href="./400.html" className="dropdown-item">
                            400 page
                          </a>
                          <a href="./401.html" className="dropdown-item">
                            401 page
                          </a>
                          <a href="./403.html" className="dropdown-item">
                            403 page
                          </a>
                          <a href="./404.html" className="dropdown-item">
                            404 page
                          </a>
                          <a href="./500.html" className="dropdown-item">
                            500 page
                          </a>
                          <a href="./503.html" className="dropdown-item">
                            503 page
                          </a>
                          <a
                            href="./maintenance.html"
                            className="dropdown-item"
                          >
                            Maintenance page
                          </a>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="./form-elements.html">
                      <span className="nav-link-icon d-md-none d-lg-inline-block">
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
                          <polyline points="9 11 12 14 20 6" />
                          <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
                        </svg>
                      </span>
                      <span className="nav-link-title">Form elements</span>
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#navbar-extra"
                      data-toggle="dropdown"
                      role="button"
                      aria-expanded="false"
                    >
                      <span className="nav-link-icon d-md-none d-lg-inline-block">
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
                          <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                        </svg>
                      </span>
                      <span className="nav-link-title">Extra</span>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="./invoice.html">
                          Invoice
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./blog.html">
                          Blog cards
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./snippets.html">
                          Snippets
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="./search-results.html"
                        >
                          Search results
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./pricing.html">
                          Pricing cards
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./users.html">
                          Users
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./gallery.html">
                          Gallery
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./profile.html">
                          Profile
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./music.html">
                          Music
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#navbar-layout"
                      data-toggle="dropdown"
                      role="button"
                      aria-expanded="false"
                    >
                      <span className="nav-link-icon d-md-none d-lg-inline-block">
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
                          <rect x={4} y={4} width={6} height={5} rx={2} />
                          <rect x={4} y={13} width={6} height={7} rx={2} />
                          <rect x={14} y={4} width={6} height={7} rx={2} />
                          <rect x={14} y={15} width={6} height={5} rx={2} />
                        </svg>
                      </span>
                      <span className="nav-link-title">Layout</span>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a
                          className="dropdown-item"
                          href="./layout-horizontal.html"
                        >
                          Horizontal
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="./layout-vertical.html"
                        >
                          Vertical
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="./layout-vertical-right.html"
                        >
                          Right vertical
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="./layout-condensed.html"
                        >
                          Condensed
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="./layout-condensed-dark.html"
                        >
                          Condensed dark
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./layout-combo.html">
                          Combined
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="./layout-navbar-dark.html"
                        >
                          Navbar dark
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./layout-dark.html">
                          Dark mode
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./layout-fluid.html">
                          Fluid
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="./layout-fluid-vertical.html"
                        >
                          Fluid vertical
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#navbar-docs"
                      data-toggle="dropdown"
                      role="button"
                      aria-expanded="false"
                    >
                      <span className="nav-link-icon d-md-none d-lg-inline-block">
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
                          <polyline points="14 3 14 8 19 8" />
                          <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                          <line x1={9} y1={9} x2={10} y2={9} />
                          <line x1={9} y1={13} x2={15} y2={13} />
                          <line x1={9} y1={17} x2={15} y2={17} />
                        </svg>
                      </span>
                      <span className="nav-link-title">Docs</span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-columns  dropdown-menu-columns-3">
                      <li>
                        <a className="dropdown-item" href="./docs/index.html">
                          Introduction
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./docs/alerts.html">
                          Alerts
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="./docs/autosize.html"
                        >
                          Autosize
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./docs/avatars.html">
                          Avatars
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./docs/badges.html">
                          Badges
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="./docs/breadcrumb.html"
                        >
                          Breadcrumb
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./docs/buttons.html">
                          Buttons
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./docs/cards.html">
                          Cards
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="./docs/carousel.html"
                        >
                          Carousel
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./docs/colors.html">
                          Colors
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./docs/countup.html">
                          Countup
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./docs/cursors.html">
                          Cursors
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./docs/charts.html">
                          Charts
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="./docs/dropdowns.html"
                        >
                          Dropdowns
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./docs/divider.html">
                          Divider
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./docs/empty.html">
                          Empty states
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./docs/flags.html">
                          Flags
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="./docs/form-elements.html"
                        >
                          Form elements
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="./docs/form-helpers.html"
                        >
                          Form helpers
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="./docs/input-mask.html"
                        >
                          Form input mask
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./docs/modals.html">
                          Modals
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="./docs/progress.html"
                        >
                          Progress
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="./docs/payments.html"
                        >
                          Payments
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="./docs/range-slider.html"
                        >
                          Range slider
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./docs/ribbons.html">
                          Ribbons
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="./docs/spinners.html"
                        >
                          Spinners
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./docs/steps.html">
                          Steps
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./docs/tables.html">
                          Tables
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./docs/tabs.html">
                          Tabs
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="./docs/timelines.html"
                        >
                          Timelines
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="./docs/toasts.html">
                          Toasts
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="./docs/tooltips.html"
                        >
                          Tooltips
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="./docs/typography.html"
                        >
                          Typography
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="my-2 my-md-0 flex-grow-1 flex-md-grow-0 order-first order-md-last">
                  <form action="." method="get">
                    <div className="input-icon">
                      <span className="input-icon-addon">
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
                          <circle cx={10} cy={10} r={7} />
                          <line x1={21} y1={21} x2={15} y2={15} />
                        </svg>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search…"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container-xl">
            {/* Page title */}
            <div className="page-header">
              <div className="row align-items-center">
                <div className="col-auto">
                  {/* Page pre-title */}
                  <div className="page-pretitle">Overview</div>
                  <h2 className="page-title">Dashboard</h2>
                </div>
                {/* Page title actions */}
                <div className="col-auto ml-auto d-print-none">
                  <span className="d-none d-sm-inline">
                    <a href="#" className="btn btn-white">
                      New view
                    </a>
                  </span>
                  <a
                    href="#"
                    className="btn btn-primary ml-3 d-none d-sm-inline-block"
                    data-toggle="modal"
                    data-target="#modal-report"
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
                      <line x1={12} y1={5} x2={12} y2={19} />
                      <line x1={5} y1={12} x2={19} y2={12} />
                    </svg>
                    Create new report
                  </a>
                  <a
                    href="#"
                    className="btn btn-primary ml-3 d-sm-none btn-icon"
                    data-toggle="modal"
                    data-target="#modal-report"
                    aria-label="Create new report"
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
                      <line x1={12} y1={5} x2={12} y2={19} />
                      <line x1={5} y1={12} x2={19} y2={12} />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="row row-deck row-cards">
              <div className="col-sm-6 col-lg-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="subheader">Sales</div>
                      <div className="ml-auto lh-1">
                        <div className="dropdown">
                          <a
                            className="dropdown-toggle text-muted"
                            href="#"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Last 7 days
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item active" href="#">
                              Last 7 days
                            </a>
                            <a className="dropdown-item" href="#">
                              Last 30 days
                            </a>
                            <a className="dropdown-item" href="#">
                              Last 3 months
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h1 mb-3">75%</div>
                    <div className="d-flex mb-2">
                      <div>Conversion rate</div>
                      <div className="ml-auto">
                        <span className="text-green d-inline-flex align-items-center lh-1">
                          7%{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon ml-1"
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
                            <polyline points="3 17 9 11 13 15 21 7" />
                            <polyline points="14 7 21 7 21 14" />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="progress progress-sm">
                      <div
                        className="progress-bar bg-blue"
                        style={{ width: "75%" }}
                        role="progressbar"
                        aria-valuenow={75}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <span className="sr-only">75% Complete</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="subheader">Revenue</div>
                      <div className="ml-auto lh-1">
                        <div className="dropdown">
                          <a
                            className="dropdown-toggle text-muted"
                            href="#"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Last 7 days
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item active" href="#">
                              Last 7 days
                            </a>
                            <a className="dropdown-item" href="#">
                              Last 30 days
                            </a>
                            <a className="dropdown-item" href="#">
                              Last 3 months
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-baseline">
                      <div className="h1 mb-0 mr-2">$4,300</div>
                      <div className="mr-auto">
                        <span className="text-green d-inline-flex align-items-center lh-1">
                          8%{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon ml-1"
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
                            <polyline points="3 17 9 11 13 15 21 7" />
                            <polyline points="14 7 21 7 21 14" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div id="chart-revenue-bg" className="chart-sm" />
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="subheader">New clients</div>
                      <div className="ml-auto lh-1">
                        <div className="dropdown">
                          <a
                            className="dropdown-toggle text-muted"
                            href="#"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Last 7 days
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item active" href="#">
                              Last 7 days
                            </a>
                            <a className="dropdown-item" href="#">
                              Last 30 days
                            </a>
                            <a className="dropdown-item" href="#">
                              Last 3 months
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-baseline">
                      <div className="h1 mb-3 mr-2">6,782</div>
                      <div className="mr-auto">
                        <span className="text-yellow d-inline-flex align-items-center lh-1">
                          0%{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon ml-1"
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
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div id="chart-new-clients" className="chart-sm" />
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="subheader">Active users</div>
                      <div className="ml-auto lh-1">
                        <div className="dropdown">
                          <a
                            className="dropdown-toggle text-muted"
                            href="#"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Last 7 days
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item active" href="#">
                              Last 7 days
                            </a>
                            <a className="dropdown-item" href="#">
                              Last 30 days
                            </a>
                            <a className="dropdown-item" href="#">
                              Last 3 months
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-baseline">
                      <div className="h1 mb-3 mr-2">2,986</div>
                      <div className="mr-auto">
                        <span className="text-green d-inline-flex align-items-center lh-1">
                          4%{" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon ml-1"
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
                            <polyline points="3 17 9 11 13 15 21 7" />
                            <polyline points="14 7 21 7 21 14" />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div id="chart-active-users" className="chart-sm" />
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Traffic summary</h3>
                    <div id="chart-mentions" className="chart-lg" />
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Top countries</h3>
                    <div className="embed-responsive embed-responsive-16by9">
                      <div className="embed-responsive-item">
                        <div id="map-world" className="w-100 h-100" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="row row-cards row-deck">
                  <div className="col-sm-6">
                    <div className="card">
                      <div className="card-body p-4 py-5 text-center">
                        <span className="avatar avatar-xl mb-4">W</span>
                        <h3 className="mb-0">New website</h3>
                        <p className="text-muted">Due to: 28 Aug 2019</p>
                        <p className="mb-3">
                          <span className="badge bg-red-lt">Waiting</span>
                        </p>
                        <div>
                          <div className="avatar-list avatar-list-stacked">
                            <span
                              className="avatar"
                              style={{
                                backgroundImage:
                                  "url(./static/avatars/000m.jpg)",
                              }}
                            />
                            <span className="avatar">JL</span>
                            <span
                              className="avatar"
                              style={{
                                backgroundImage:
                                  "url(./static/avatars/002m.jpg)",
                              }}
                            />
                            <span
                              className="avatar"
                              style={{
                                backgroundImage:
                                  "url(./static/avatars/003m.jpg)",
                              }}
                            />
                            <span
                              className="avatar"
                              style={{
                                backgroundImage:
                                  "url(./static/avatars/000f.jpg)",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="progress card-progress">
                        <div
                          className="progress-bar"
                          style={{ width: "38%" }}
                          role="progressbar"
                          aria-valuenow={38}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <span className="sr-only">38% Complete</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="card">
                      <div className="card-body p-4 py-5 text-center">
                        <span className="avatar avatar-xl mb-4 bg-green-lt">
                          W
                        </span>
                        <h3 className="mb-0">UI Redesign</h3>
                        <p className="text-muted">Due to: 11 Nov 2019</p>
                        <p className="mb-3">
                          <span className="badge bg-green-lt">
                            Final review
                          </span>
                        </p>
                        <div>
                          <div className="avatar-list avatar-list-stacked">
                            <span className="avatar">HS</span>
                            <span
                              className="avatar"
                              style={{
                                backgroundImage:
                                  "url(./static/avatars/006m.jpg)",
                              }}
                            />
                            <span
                              className="avatar"
                              style={{
                                backgroundImage:
                                  "url(./static/avatars/004f.jpg)",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="progress card-progress">
                        <div
                          className="progress-bar bg-green"
                          style={{ width: "38%" }}
                          role="progressbar"
                          aria-valuenow={38}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <span className="sr-only">38% Complete</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="card">
                      <div className="card-body p-2 text-center">
                        <div className="text-right text-green">
                          <span className="text-green d-inline-flex align-items-center lh-1">
                            6%{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon ml-1"
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
                              <polyline points="3 17 9 11 13 15 21 7" />
                              <polyline points="14 7 21 7 21 14" />
                            </svg>
                          </span>
                        </div>
                        <div className="h1 m-0">43</div>
                        <div className="text-muted mb-4">New Tickets</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="card">
                      <div className="card-body p-2 text-center">
                        <div className="text-right text-red">
                          <span className="text-red d-inline-flex align-items-center lh-1">
                            -2%{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon ml-1"
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
                              <polyline points="3 7 9 13 13 9 21 17" />
                              <polyline points="21 10 21 17 14 17" />
                            </svg>
                          </span>
                        </div>
                        <div className="h1 m-0">95</div>
                        <div className="text-muted mb-4">Daily Earnings</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="card">
                      <div className="card-body p-2 text-center">
                        <div className="text-right text-green">
                          <span className="text-green d-inline-flex align-items-center lh-1">
                            9%{" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon ml-1"
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
                              <polyline points="3 17 9 11 13 15 21 7" />
                              <polyline points="14 7 21 7 21 14" />
                            </svg>
                          </span>
                        </div>
                        <div className="h1 m-0">7</div>
                        <div className="text-muted mb-4">New Replies</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card">
                  <div id="chart-development-activity" className="mt-4" />
                  <div className="table-responsive">
                    <table className="table card-table table-vcenter">
                      <thead>
                        <tr>
                          <th>User</th>
                          <th>Commit</th>
                          <th>Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="w-1">
                            <span
                              className="avatar"
                              style={{
                                backgroundImage:
                                  "url(./static/avatars/000m.jpg)",
                              }}
                            />
                          </td>
                          <td className="td-truncate">
                            <div className="text-truncate">
                              Fix dart Sass compatibility (#29755)
                            </div>
                          </td>
                          <td className="text-nowrap text-muted">
                            28 Nov 2019
                          </td>
                        </tr>
                        <tr>
                          <td className="w-1">
                            <span className="avatar">JL</span>
                          </td>
                          <td className="td-truncate">
                            <div className="text-truncate">
                              Change deprecated html tags to text decoration
                              classes (#29604)
                            </div>
                          </td>
                          <td className="text-nowrap text-muted">
                            27 Nov 2019
                          </td>
                        </tr>
                        <tr>
                          <td className="w-1">
                            <span
                              className="avatar"
                              style={{
                                backgroundImage:
                                  "url(./static/avatars/002m.jpg)",
                              }}
                            />
                          </td>
                          <td className="td-truncate">
                            <div className="text-truncate">
                              justify-content:between ⇒
                              justify-content:space-between (#29734)
                            </div>
                          </td>
                          <td className="text-nowrap text-muted">
                            26 Nov 2019
                          </td>
                        </tr>
                        <tr>
                          <td className="w-1">
                            <span
                              className="avatar"
                              style={{
                                backgroundImage:
                                  "url(./static/avatars/003m.jpg)",
                              }}
                            />
                          </td>
                          <td className="td-truncate">
                            <div className="text-truncate">
                              Update change-version.js (#29736)
                            </div>
                          </td>
                          <td className="text-nowrap text-muted">
                            26 Nov 2019
                          </td>
                        </tr>
                        <tr>
                          <td className="w-1">
                            <span
                              className="avatar"
                              style={{
                                backgroundImage:
                                  "url(./static/avatars/000f.jpg)",
                              }}
                            />
                          </td>
                          <td className="td-truncate">
                            <div className="text-truncate">
                              Regenerate package-lock.json (#29730)
                            </div>
                          </td>
                          <td className="text-nowrap text-muted">
                            25 Nov 2019
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-3">
                <div className="card card-sm">
                  <div className="card-body d-flex align-items-center">
                    <span className="bg-blue text-white stamp mr-3">
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
                        <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" />
                        <path d="M12 3v3m0 12v3" />
                      </svg>
                    </span>
                    <div className="mr-3 lh-sm">
                      <div className="strong">132 Sales</div>
                      <div className="text-muted">12 waiting payments</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-3">
                <div className="card card-sm">
                  <div className="card-body d-flex align-items-center">
                    <span className="bg-green text-white stamp mr-3">
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
                        <circle cx={9} cy={19} r={2} />
                        <circle cx={17} cy={19} r={2} />
                        <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" />
                      </svg>
                    </span>
                    <div className="mr-3 lh-sm">
                      <div className="strong">78 Orders</div>
                      <div className="text-muted">32 shipped</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-3">
                <div className="card card-sm">
                  <div className="card-body d-flex align-items-center">
                    <div className="mr-3">
                      <div
                        className="chart-sparkline chart-sparkline-square"
                        id="sparkline-7"
                      />
                    </div>
                    <div className="mr-3 lh-sm">
                      <div className="strong">1,352 Members</div>
                      <div className="text-muted">163 registered today</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-3">
                <div className="card card-sm">
                  <div className="card-body d-flex align-items-center">
                    <div className="mr-3 lh-sm">
                      <div className="strong">132 Comments</div>
                      <div className="text-muted">16 waiting</div>
                    </div>
                    <div className="ml-auto">
                      <div
                        className="chart-sparkline chart-sparkline-square"
                        id="sparkline-8"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-8">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Most Visited Pages</h4>
                  </div>
                  <div className="table-responsive">
                    <table className="table card-table table-vcenter">
                      <thead>
                        <tr>
                          <th>Page name</th>
                          <th>Visitors</th>
                          <th>Unique</th>
                          <th colSpan={2}>Bounce rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            /about.html
                            <a href="#" className="link-secondary ml-2">
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
                                <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
                                <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
                              </svg>
                            </a>
                          </td>
                          <td className="text-muted">4,896</td>
                          <td className="text-muted">3,654</td>
                          <td className="text-muted">82.54%</td>
                          <td className="text-right">
                            <div className="chart-sparkline" id="sparkline-9" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            /special-promo.html
                            <a href="#" className="link-secondary ml-2">
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
                                <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
                                <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
                              </svg>
                            </a>
                          </td>
                          <td className="text-muted">3,652</td>
                          <td className="text-muted">3,215</td>
                          <td className="text-muted">76.29%</td>
                          <td className="text-right">
                            <div
                              className="chart-sparkline"
                              id="sparkline-10"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            /news/1,new-ui-kit.html
                            <a href="#" className="link-secondary ml-2">
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
                                <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
                                <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
                              </svg>
                            </a>
                          </td>
                          <td className="text-muted">3,256</td>
                          <td className="text-muted">2,865</td>
                          <td className="text-muted">72.65%</td>
                          <td className="text-right">
                            <div
                              className="chart-sparkline"
                              id="sparkline-11"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            /lorem-ipsum-dolor-sit-amet-very-long-url.html
                            <a href="#" className="link-secondary ml-2">
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
                                <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
                                <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
                              </svg>
                            </a>
                          </td>
                          <td className="text-muted">986</td>
                          <td className="text-muted">865</td>
                          <td className="text-muted">44.89%</td>
                          <td className="text-right">
                            <div
                              className="chart-sparkline"
                              id="sparkline-12"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <a
                  href="https://github.com/sponsors/codecalm"
                  className="card card-sponsor"
                  target="_blank"
                  style={{
                    backgroundImage:
                      "url(./static/sponsor-banner-homepage.svg)",
                  }}
                >
                  <div className="card-body" />
                </a>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Social Media Traffic</h4>
                  </div>
                  <table className="table card-table table-vcenter">
                    <thead>
                      <tr>
                        <th>Network</th>
                        <th colSpan={2}>Visitors</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Instagram</td>
                        <td>3,550</td>
                        <td className="w-50">
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-primary"
                              style={{ width: "71.0%" }}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Twitter</td>
                        <td>1,798</td>
                        <td className="w-50">
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-primary"
                              style={{ width: "35.96%" }}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Facebook</td>
                        <td>1,245</td>
                        <td className="w-50">
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-primary"
                              style={{ width: "24.9%" }}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Pinterest</td>
                        <td>854</td>
                        <td className="w-50">
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-primary"
                              style={{ width: "17.08%" }}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>VK</td>
                        <td>650</td>
                        <td className="w-50">
                          <div className="progress progress-xs">
                            <div
                              className="progress-bar bg-primary"
                              style={{ width: "13.0%" }}
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-md-6 col-lg-8">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Tasks</h4>
                  </div>
                  <div className="table-responsive">
                    <table className="table card-table table-vcenter">
                      <tbody>
                        <tr>
                          <td className="w-1 pr-0">
                            <label className="form-check m-0">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                defaultChecked
                              />
                              <span className="form-check-label" />
                            </label>
                          </td>
                          <td className="w-100">
                            <a href="#" className="text-reset">
                              Extend the data model.
                            </a>
                          </td>
                          <td className="text-nowrap text-muted">
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
                              <rect x={4} y={5} width={16} height={16} rx={2} />
                              <line x1={16} y1={3} x2={16} y2={7} />
                              <line x1={8} y1={3} x2={8} y2={7} />
                              <line x1={4} y1={11} x2={20} y2={11} />
                              <line x1={11} y1={15} x2={12} y2={15} />
                              <line x1={12} y1={15} x2={12} y2={18} />
                            </svg>
                            January 01, 2019
                          </td>
                          <td className="text-nowrap">
                            <a href="#" className="text-muted">
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
                                <path d="M5 12l5 5l10 -10" />
                              </svg>
                              2/7
                            </a>
                          </td>
                          <td className="text-nowrap">
                            <a href="#" className="text-muted">
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
                                <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
                                <line x1={8} y1={9} x2={16} y2={9} />
                                <line x1={8} y1={13} x2={14} y2={13} />
                              </svg>
                              3
                            </a>
                          </td>
                          <td>
                            <span
                              className="avatar"
                              style={{
                                backgroundImage:
                                  "url(./static/avatars/000m.jpg)",
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="w-1 pr-0">
                            <label className="form-check m-0">
                              <input
                                type="checkbox"
                                className="form-check-input"
                              />
                              <span className="form-check-label" />
                            </label>
                          </td>
                          <td className="w-100">
                            <a href="#" className="text-reset">
                              Verify the event flow.
                            </a>
                          </td>
                          <td className="text-nowrap text-muted">
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
                              <rect x={4} y={5} width={16} height={16} rx={2} />
                              <line x1={16} y1={3} x2={16} y2={7} />
                              <line x1={8} y1={3} x2={8} y2={7} />
                              <line x1={4} y1={11} x2={20} y2={11} />
                              <line x1={11} y1={15} x2={12} y2={15} />
                              <line x1={12} y1={15} x2={12} y2={18} />
                            </svg>
                            January 01, 2019
                          </td>
                          <td className="text-nowrap">
                            <a href="#" className="text-muted">
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
                                <path d="M5 12l5 5l10 -10" />
                              </svg>
                              3/10
                            </a>
                          </td>
                          <td className="text-nowrap">
                            <a href="#" className="text-muted">
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
                                <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
                                <line x1={8} y1={9} x2={16} y2={9} />
                                <line x1={8} y1={13} x2={14} y2={13} />
                              </svg>
                              6
                            </a>
                          </td>
                          <td>
                            <span className="avatar">JL</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="w-1 pr-0">
                            <label className="form-check m-0">
                              <input
                                type="checkbox"
                                className="form-check-input"
                              />
                              <span className="form-check-label" />
                            </label>
                          </td>
                          <td className="w-100">
                            <a href="#" className="text-reset">
                              Database backup and maintenance
                            </a>
                          </td>
                          <td className="text-nowrap text-muted">
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
                              <rect x={4} y={5} width={16} height={16} rx={2} />
                              <line x1={16} y1={3} x2={16} y2={7} />
                              <line x1={8} y1={3} x2={8} y2={7} />
                              <line x1={4} y1={11} x2={20} y2={11} />
                              <line x1={11} y1={15} x2={12} y2={15} />
                              <line x1={12} y1={15} x2={12} y2={18} />
                            </svg>
                            January 01, 2019
                          </td>
                          <td className="text-nowrap">
                            <a href="#" className="text-muted">
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
                                <path d="M5 12l5 5l10 -10" />
                              </svg>
                              0/6
                            </a>
                          </td>
                          <td className="text-nowrap">
                            <a href="#" className="text-muted">
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
                                <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
                                <line x1={8} y1={9} x2={16} y2={9} />
                                <line x1={8} y1={13} x2={14} y2={13} />
                              </svg>
                              1
                            </a>
                          </td>
                          <td>
                            <span
                              className="avatar"
                              style={{
                                backgroundImage:
                                  "url(./static/avatars/002m.jpg)",
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="w-1 pr-0">
                            <label className="form-check m-0">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                defaultChecked
                              />
                              <span className="form-check-label" />
                            </label>
                          </td>
                          <td className="w-100">
                            <a href="#" className="text-reset">
                              Identify the implementation team.
                            </a>
                          </td>
                          <td className="text-nowrap text-muted">
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
                              <rect x={4} y={5} width={16} height={16} rx={2} />
                              <line x1={16} y1={3} x2={16} y2={7} />
                              <line x1={8} y1={3} x2={8} y2={7} />
                              <line x1={4} y1={11} x2={20} y2={11} />
                              <line x1={11} y1={15} x2={12} y2={15} />
                              <line x1={12} y1={15} x2={12} y2={18} />
                            </svg>
                            January 01, 2019
                          </td>
                          <td className="text-nowrap">
                            <a href="#" className="text-muted">
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
                                <path d="M5 12l5 5l10 -10" />
                              </svg>
                              6/10
                            </a>
                          </td>
                          <td className="text-nowrap">
                            <a href="#" className="text-muted">
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
                                <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
                                <line x1={8} y1={9} x2={16} y2={9} />
                                <line x1={8} y1={13} x2={14} y2={13} />
                              </svg>
                              12
                            </a>
                          </td>
                          <td>
                            <span
                              className="avatar"
                              style={{
                                backgroundImage:
                                  "url(./static/avatars/003m.jpg)",
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="w-1 pr-0">
                            <label className="form-check m-0">
                              <input
                                type="checkbox"
                                className="form-check-input"
                              />
                              <span className="form-check-label" />
                            </label>
                          </td>
                          <td className="w-100">
                            <a href="#" className="text-reset">
                              Define users and workflow
                            </a>
                          </td>
                          <td className="text-nowrap text-muted">
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
                              <rect x={4} y={5} width={16} height={16} rx={2} />
                              <line x1={16} y1={3} x2={16} y2={7} />
                              <line x1={8} y1={3} x2={8} y2={7} />
                              <line x1={4} y1={11} x2={20} y2={11} />
                              <line x1={11} y1={15} x2={12} y2={15} />
                              <line x1={12} y1={15} x2={12} y2={18} />
                            </svg>
                            January 01, 2019
                          </td>
                          <td className="text-nowrap">
                            <a href="#" className="text-muted">
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
                                <path d="M5 12l5 5l10 -10" />
                              </svg>
                              3/7
                            </a>
                          </td>
                          <td className="text-nowrap">
                            <a href="#" className="text-muted">
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
                                <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
                                <line x1={8} y1={9} x2={16} y2={9} />
                                <line x1={8} y1={13} x2={14} y2={13} />
                              </svg>
                              5
                            </a>
                          </td>
                          <td>
                            <span
                              className="avatar"
                              style={{
                                backgroundImage:
                                  "url(./static/avatars/000f.jpg)",
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="w-1 pr-0">
                            <label className="form-check m-0">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                defaultChecked
                              />
                              <span className="form-check-label" />
                            </label>
                          </td>
                          <td className="w-100">
                            <a href="#" className="text-reset">
                              Check Pull Requests
                            </a>
                          </td>
                          <td className="text-nowrap text-muted">
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
                              <rect x={4} y={5} width={16} height={16} rx={2} />
                              <line x1={16} y1={3} x2={16} y2={7} />
                              <line x1={8} y1={3} x2={8} y2={7} />
                              <line x1={4} y1={11} x2={20} y2={11} />
                              <line x1={11} y1={15} x2={12} y2={15} />
                              <line x1={12} y1={15} x2={12} y2={18} />
                            </svg>
                            January 01, 2019
                          </td>
                          <td className="text-nowrap">
                            <a href="#" className="text-muted">
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
                                <path d="M5 12l5 5l10 -10" />
                              </svg>
                              2/9
                            </a>
                          </td>
                          <td className="text-nowrap">
                            <a href="#" className="text-muted">
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
                                <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
                                <line x1={8} y1={9} x2={16} y2={9} />
                                <line x1={8} y1={13} x2={14} y2={13} />
                              </svg>
                              3
                            </a>
                          </td>
                          <td>
                            <span
                              className="avatar"
                              style={{
                                backgroundImage:
                                  "url(./static/avatars/001f.jpg)",
                              }}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer footer-transparent">
            <div className="container">
              <div className="row text-center align-items-center flex-row-reverse">
                <div className="col-lg-auto ml-lg-auto">
                  <ul className="list-inline list-inline-dots mb-0">
                    <li className="list-inline-item">
                      <a href="./docs/index.html" className="link-secondary">
                        Documentation
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="./faq.html" className="link-secondary">
                        FAQ
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="https://github.com/tabler/tabler"
                        target="_blank"
                        className="link-secondary"
                      >
                        Source code
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-lg-auto mt-3 mt-lg-0">
                  Copyright © 2020
                  <a href="." className="link-secondary">
                    Tabler
                  </a>
                  . All rights reserved.
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <div
        className="modal modal-blur fade"
        id="modal-report"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">New report</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
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
                  <line x1={18} y1={6} x2={6} y2={18} />
                  <line x1={6} y1={6} x2={18} y2={18} />
                </svg>
              </button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="example-text-input"
                  placeholder="Your report name"
                />
              </div>
              <label className="form-label">Report type</label>
              <div className="form-selectgroup-boxes row mb-3">
                <div className="col-lg-6">
                  <label className="form-selectgroup-item">
                    <input
                      type="radio"
                      name="report-type"
                      defaultValue={1}
                      className="form-selectgroup-input"
                      defaultChecked
                    />
                    <span className="form-selectgroup-label d-flex align-items-center p-3">
                      <span className="mr-3">
                        <span className="form-selectgroup-check" />
                      </span>
                      <span className="form-selectgroup-label-content">
                        <span className="form-selectgroup-title strong mb-1">
                          Simple
                        </span>
                        <span className="d-block text-muted">
                          Provide only basic data needed for the report
                        </span>
                      </span>
                    </span>
                  </label>
                </div>
                <div className="col-lg-6">
                  <label className="form-selectgroup-item">
                    <input
                      type="radio"
                      name="report-type"
                      defaultValue={1}
                      className="form-selectgroup-input"
                    />
                    <span className="form-selectgroup-label d-flex align-items-center p-3">
                      <span className="mr-3">
                        <span className="form-selectgroup-check" />
                      </span>
                      <span className="form-selectgroup-label-content">
                        <span className="form-selectgroup-title strong mb-1">
                          Advanced
                        </span>
                        <span className="d-block text-muted">
                          Insert charts and additional advanced analyses to be
                          inserted in the report
                        </span>
                      </span>
                    </span>
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8">
                  <div className="mb-3">
                    <label className="form-label">Report url</label>
                    <div className="input-group input-group-flat">
                      <span className="input-group-text">
                        https://tabler.io/reports/
                      </span>
                      <input
                        type="text"
                        className="form-control pl-0"
                        defaultValue="report-01"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="mb-3">
                    <label className="form-label">Visibility</label>
                    <select className="form-select">
                      <option value={1} selected>
                        Private
                      </option>
                      <option value={2}>Public</option>
                      <option value={3}>Hidden</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label">Client name</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label className="form-label">Reporting period</label>
                    <input type="date" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div>
                    <label className="form-label">Additional information</label>
                    <textarea
                      className="form-control"
                      rows={3}
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <a
                href="#"
                className="btn btn-link link-secondary"
                data-dismiss="modal"
              >
                Cancel
              </a>
              <a
                href="#"
                className="btn btn-primary ml-auto"
                data-dismiss="modal"
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
                  <line x1={12} y1={5} x2={12} y2={19} />
                  <line x1={5} y1={12} x2={19} y2={12} />
                </svg>
                Create new report
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
