import React from 'react'

export default function CollectionsPage(){
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                
                <h2 className="breadcrumb-title">Photos Gallery</h2>
              </nav>
            </div>
          </div>
        </div>
        <div className="breadcrumb-bg">
          <img src="/theme/assets/img/bg/breadcrumb-bg-01.png" alt="img" className="breadcrumb-bg-01" />
          <img src="/theme/assets/img/bg/breadcrumb-bg-02.png" alt="img" className="breadcrumb-bg-02" />
          <img src="/theme/assets/img/bg/breadcrumb-icon.png" alt="img" className="breadcrumb-bg-03" />
          <img src="/theme/assets/img/bg/breadcrumb-icon.png" alt="img" className="breadcrumb-bg-04" />
        </div>
      </div>

      {/* Page Content */}
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">

              <div className="row blog-grid-row">
                <div className="col-md-6 col-sm-12">
                  <div className="blog grid-blog">
                    <div className="blog-image">
                      <a href="#"><img className="img-fluid" src="/theme/assets/img/blog/blog-37.jpg" alt="Post Image" /></a>
                      <span className="badge badge-cyan category-slug">Portrait</span>
                    </div>
                    <div className="blog-content">
                      <ul className="entry-meta meta-item">
                        <li>
                          <div className="post-author">
                            <a href="#"><img src="/theme/assets/img/clients/client-01.jpg" alt="Author" /> By <span>Anna</span></a>
                          </div>
                        </li>
                        <li><i className="isax isax-calendar-1" /> 12 Jul 2025</li>
                      </ul>
                      <h3 className="blog-title"><a href="#">Outdoor Sunset Portraits</a></h3>
                      <p className="mb-0">Beautiful golden-hour portraits taken on location.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-sm-12">
                  <div className="blog grid-blog">
                    <div className="blog-image">
                      <a href="#"><img className="img-fluid" src="/theme/assets/img/blog/blog-32.jpg" alt="Post Image" /></a>
                      <span className="badge badge-cyan category-slug">Lifestyle</span>
                    </div>
                    <div className="blog-content">
                      <ul className="entry-meta meta-item">
                        <li>
                          <div className="post-author">
                            <a href="#"><img src="/theme/assets/img/clients/client-02.jpg" alt="Author" /> By <span>Mark</span></a>
                          </div>
                        </li>
                        <li><i className="isax isax-calendar-1" /> 03 Jun 2025</li>
                      </ul>
                      <h3 className="blog-title"><a href="#">City Lifestyle Shoot</a></h3>
                      <p className="mb-0">Candid moments captured in urban environments.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-sm-12">
                  <div className="blog grid-blog">
                    <div className="blog-image">
                      <a href="#"><img className="img-fluid" src="/theme/assets/img/blog/blog-33.jpg" alt="Post Image" /></a>
                      <span className="badge badge-cyan category-slug">Studio</span>
                    </div>
                    <div className="blog-content">
                      <ul className="entry-meta meta-item">
                        <li>
                          <div className="post-author">
                            <a href="#"><img src="/theme/assets/img/clients/client-03.jpg" alt="Author" /> By <span>Sara</span></a>
                          </div>
                        </li>
                        <li><i className="isax isax-calendar-1" /> 18 May 2025</li>
                      </ul>
                      <h3 className="blog-title"><a href="#">High-Key Studio Portraits</a></h3>
                      <p className="mb-0">Clean, minimal studio images perfect for portfolios.</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-sm-12">
                  <div className="blog grid-blog">
                    <div className="blog-image">
                      <a href="#"><img className="img-fluid" src="/theme/assets/img/blog/blog-34.jpg" alt="Post Image" /></a>
                      <span className="badge badge-cyan category-slug">Wedding</span>
                    </div>
                    <div className="blog-content">
                      <ul className="entry-meta meta-item">
                        <li>
                          <div className="post-author">
                            <a href="#"><img src="/theme/assets/img/clients/client-04.jpg" alt="Author" /> By <span>Claire</span></a>
                          </div>
                        </li>
                        <li><i className="isax isax-calendar-1" /> 02 Apr 2025</li>
                      </ul>
                      <h3 className="blog-title"><a href="#">Intimate Wedding Highlights</a></h3>
                      <p className="mb-0">A selection of heartfelt moments from recent weddings.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pagination (static) */}
              <div className="row">
                <div className="col-md-12">
                  <div className="pagination dashboard-pagination mt-md-3 mt-0 mb-4">
                    <ul>
                      <li><a href="#">1</a></li>
                      <li className="active"><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">Next</a></li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <div className="col-lg-4 col-md-12 sidebar-right theiaStickySidebar">
              

              <div className="card post-widget">
                <div className="card-body">
                  <h5 className="mb-3">Latest Collections</h5>
                  <ul className="latest-posts">
                    <li>
                      <div className="post-thumb">
                        <a href="#"><img src="/theme/assets/img/blog/blog-32.jpg" alt="img" /></a>
                      </div>
                      <div className="post-info">
                        <h5><a href="#">City Lifestyle</a></h5>
                        <span>03 Jun 2025</span>
                      </div>
                    </li>
                    <li>
                      <div className="post-thumb">
                        <a href="#"><img src="/theme/assets/img/blog/blog-33.jpg" alt="img" /></a>
                      </div>
                      <div className="post-info">
                        <h5><a href="#">Studio Series</a></h5>
                        <span>18 May 2025</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card category-widget">
                <div className="card-body">
                  <h5 className="mb-3">Categories</h5>
                  <ul className="categories">
                    <li><a href="#">Portrait <span>(2)</span></a></li>
                    <li><a href="#">Wedding <span>(4)</span></a></li>
                    <li><a href="#">Lifestyle <span>(5)</span></a></li>
                    <li><a href="#">Studio <span>(4)</span></a></li>
                  </ul>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}
