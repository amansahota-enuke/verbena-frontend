export default function Test (){
    return(
        <>
    <div class="navbar page-topbar navbar-expand-lg">
      <div class="container-fluid">
        
        <a class="navbar-brand mx-3" href="javascript:void(0)">
          <img src="images/img/logo1.png" alt="" title=""/>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse w-100 collapse" id="navbarSupportedContent">

          <ul class="navbar-nav navbar-nav-scroll me-auto quick-menu">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="demoMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Standard Photo Editor</a>
              <ul class="dropdown-menu" aria-labelledby="demoMenu">
                <li> <a class="dropdown-item" href="#">Home Default</a></li>
              </ul>
            </li>
          </ul>

          <ul class="navbar-nav navbar-nav-scroll me-auto quick-menu">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="demoMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Open</a>
              <ul class="dropdown-menu" aria-labelledby="demoMenu">
                <li> <a class="dropdown-item" href="#">Home Default</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="demoMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Save</a>
              <ul class="dropdown-menu" aria-labelledby="demoMenu">
                <li> 
                  <a class="dropdown-item" href="#">Home Default</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Reset</a>
            </li>
          </ul>

          <ul class="navbar-nav navbar-nav-scroll quick-menu profile-menu">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="profileMenu"  data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="user-profile">G</span>
              </a>
              <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="profileMenu">
                <li> 
                  <a class="dropdown-item" href="#">Logout</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="page-container">
      <div class="page-sidebar">
        <div class="sidebar-menu">
          <ul class="list-unstyled">
            <li>
              <a href="javascript:void(0);">
                <span class="sidemenu image-manager" title="Image Manager"></span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <span class="sidemenu edit-icon" title="Edit"></span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <span class="sidemenu portrait-icon" title="Portrait"></span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <span class="sidemenu effect-icon" title="Effect"></span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <span class="sidemenu filters-icon" title="Filters"></span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <span class="sidemenu overlay-icon" title="Overlay"></span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <span class="sidemenu mask-icon" title="Mask"></span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <span class="sidemenu text-icon" title="Text"></span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <span class="sidemenu drawing-icon" title="Drawing"></span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <span class="sidemenu graphics-icon" title="Graphics"></span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <span class="sidemenu frame-icon" title="Frame"></span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <span class="sidemenu setting-icon" title="Settings"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="sidebar-inner-menu">
          <div class="sidebar-inner-content">
            <div class="menu-title">
              <div class="d-flex align-items-center">
                <div class="back flex-grow-0 me-3">
                  <a href="#"><img src="images/img/back_icon.png" alt="" title=""/></a>
                </div>
                <div class="menu-heading flex-grow-1">Background Removal</div>
                <div class="title-help">
                  <a href="#"><img src="images/img/help_icon.png" alt="" title=""/></a>
                </div>
              </div>
            </div>
            
            <div class="instant-removal text-center">
              <button type="button" class="btn btn-instant">
                <img src="images/img/instant_icon.png" alt="" title=""/> Instant Remove <sup>AI</sup>
              </button>
            </div>

            <hr class="border-bottom border-bottom-gray"/>

            <div class="tool">
              <div class="tool-title">Tool</div>
              <div class="d-flex justify-content-between">
                <div class="flex-grow-1">
                  <ul class="list-inline custom-tool">
                    <li class="list-inline-item">
                      <a href="#" class="active">
                        <img src="images/img/lesso_remove.png" alt="" title=""/>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#" class="erase-icon">
                        <img src="images/img/erase_icon.png" class="on-hover-none" alt="" title=""/>
                        <img src="images/img/erase_icon_hover.png" class="on-hover-block" alt="" title=""/>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#" class="paint-icon">
                        <img src="images/img/paint_icon.png" class="on-hover-none" alt="" title=""/>
                        <img src="images/img/paint_icon_hover.png" class="on-hover-block" alt="" title=""/>
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul class="list-unstyled custom-tool">
                    <li class="list-inline-item">
                      <a href="#" class="reset-icon">
                        <img src="images/img/reset_icon.png" class="on-hover-none" alt="" title=""/>
                        <img src="images/img/reset_icon_hover.png" class="on-hover-block" alt="" title=""/>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="brush-size">
              <div class="d-flex justify-content-between">
                <div class="brush-title">Brush Size</div>
                <div class="brush-percentage" id="rangeValue">40 %</div>
              </div>

              <div class="brush-slider">
                <input class="w-100" type="range" min="1" max="100" value="40" />
              </div>
            </div>

            <div class="isolate-object-wrapper">
              <div class="isolate-object">
                <button type="button" class="btn btn-isolate w-100">Isolate Object</button>
              </div>
            </div>

            <div class="bg-color-wrapper">
              <div class="d-flex justify-content-between align-items-center">
                <div class="change-bg-title">Background Color</div>
                <div class="change-bg-slider">
                  <label class="pure-material-switch">
                    <input type="checkbox"/>
                    <span></span>
                  </label>
                </div>
              </div>
            </div>

            <div class="save-btn-wrapper">
              <div class="save-btn">
                <div class="d-flex justify-content-between">
                  <div>
                    <button type="button" class="btn btn-cancel">Cancel</button>
                  </div>
                  <div>
                    <button type="button" class="btn btn-apply">Apply</button>
                  </div>
                </div>
              </div>
            </div>



          </div>
      </div>

      <div id="main-content">
        <div class="wrapper main-wrapper row postion-relative">
          <img src="https://picsum.photos/1000/670" class="img-fluid" alt="" title=""/>
        </div>
      </div>

    </div>


    
    {/* <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.slim.min.js"></script>
    <script type="text/javascript" src="js/custom.js"></script>
    <script>
      function rangeSlide(value) {
            document.getElementById('rangeValue').innerHTML = value;
        }
    </script> */}
</>
    )
}