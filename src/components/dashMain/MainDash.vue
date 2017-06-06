<template>
  <div class="maindash">
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="card card-stats">
            <div class="card-header" data-background-color="orange">
              <i class="material-icons">content_copy</i>
            </div>
            <div class="card-content">
              <p class="category">Hosted Feedbacks</p>
              <h3 class="title">49/50</h3>
            </div>
            <div class="card-footer">
              <div class="stats">
                <i class="material-icons text-danger">warning</i> <a href="#pablo">Upgrade to get more...</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="card card-stats">
            <div class="card-header" data-background-color="green">
              <i class="material-icons">store</i>
            </div>
            <div class="card-content">
              <p class="category">Feedbacks Received</p>
              <h3 class="title">4,245</h3>
            </div>
            <div class="card-footer">
              <div class="stats">
                <i class="material-icons">date_range</i> Last 24 Hours
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="card card-stats">
            <div class="card-header" data-background-color="red">
              <i class="material-icons">info_outline</i>
            </div>
            <div class="card-content">
              <p class="category">Fixed Issues</p>
              <h3 class="title">75</h3>
            </div>
            <div class="card-footer">
              <div class="stats">
                <i class="material-icons">date_range</i> Last 24 Hours
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="card card-stats">
            <div class="card-header" data-background-color="blue">
              <i class="fa fa-user-plus"></i>
            </div>
            <div class="card-content">
              <p class="category">New Users</p>
              <h3 class="title">+245</h3>
            </div>
            <div class="card-footer">
              <div class="stats">
                <i class="material-icons">update</i> Just Updated
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <div class="card-header card-chart" data-background-color="green">
              <div class="ct-chart" id="dailySalesChart"></div>
            </div>
            <div class="card-content">
              <h4 class="title">Daily Feedbacks</h4>
              <p class="category"><span class="text-success"><i class="fa fa-long-arrow-up"></i> 55%  </span> increase in today feedbacks.</p>
            </div>
            <div class="card-footer">
              <div class="stats">
                <i class="material-icons">access_time</i> updated 4 minutes ago
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card">
            <div class="card-header card-chart" data-background-color="orange">
              <div class="ct-chart" id="emailsSubscriptionChart"></div>
            </div>
            <div class="card-content">
              <h4 class="title">Email Redirects</h4>
              <p class="category">Last Campaign Performance</p>
            </div>
            <div class="card-footer">
              <div class="stats">
                <i class="material-icons">access_time</i> campaign sent 2 days ago
              </div>
            </div>

          </div>
        </div>

        <div class="col-md-4">
          <div class="card">
            <div class="card-header card-chart" data-background-color="red">
              <div class="ct-chart" id="completedTasksChart"></div>
            </div>
            <div class="card-content">
              <h4 class="title">Completed Feedbacks</h4>
              <p class="category">Last Campaign Performance</p>
            </div>
            <div class="card-footer">
              <div class="stats">
                <i class="material-icons">access_time</i> campaign sent 2 days ago
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">

        <div class="col-lg-6 col-md-12">
          <div class="card">
                          <div class="card-header" data-background-color="purple">
                              <h4 class="title">Pinned Feedbacks</h4>
                              <p class="category">Your pinned feedbacks will list here</p>
                          </div>
                          <div class="card-content table-responsive">
                              <table class="table table-hover">
                                  <thead class="text-primary">
                                    <th>Name</th>
                                    <th>Feedbacks Received</th>
                                    <th>Created On</th>
                  <th>Actions</th>
                                  </thead>
                                  <tbody>
                                      <tr>
                                        <td>Amazon Gift Card</td>
                                        <td>150</td>
                                        <td>12-Dec-2016</td>
                    <td>
                      <a href="#" class="btn btn-fab btn-fab-mini btn-info" title="View Details" data-toggle="modal" data-target="#myModal"><i class="material-icons">search</i></a>
                      <a href="#" class="btn btn-fab btn-fab-mini btn-warning" title="Unpin this feedback"><i class="material-icons">visibility_off</i></a>
                      <a href="#" class="btn btn-fab btn-fab-mini btn-danger" title="Delete this feedback"><i class="material-icons">delete_forever</i></a>
                    </td>
                                      </tr>

                                      <tr>
                                        <td>Flipcart Electronics</td>
                                        <td>255</td>
                                        <td>19-Nov-2015</td>
                    <td>
                      <a href="#" class="btn btn-fab btn-fab-mini btn-info" title="View Details" data-toggle="modal" data-target="#myModal"><i class="material-icons">search</i></a>
                      <a href="#" class="btn btn-fab btn-fab-mini btn-warning" title="Unpin this feedback"><i class="material-icons">visibility_off</i></a>
                      <a href="#" class="btn btn-fab btn-fab-mini btn-danger" title="Delete this feedback"><i class="material-icons">delete_forever</i></a>
                    </td>
                                      </tr>

                                      <tr>
                                        <td>Ebay Refurbished Goods</td>
                                        <td>145</td>
                                        <td>05-Jan-2017</td>
                    <td>
                      <a href="#" class="btn btn-fab btn-fab-mini btn-info" title="View Details" data-toggle="modal" data-target="#myModal"><i class="material-icons">search</i></a>
                      <a href="#" class="btn btn-fab btn-fab-mini btn-warning" title="Unpin this feedback"><i class="material-icons">visibility_off</i></a>
                      <a href="#" class="btn btn-fab btn-fab-mini btn-danger" title="Delete this feedback"><i class="material-icons">delete_forever</i></a>
                    </td>
                                      </tr>

                                      <tr>
                                        <td>Snapdeal Service</td>
                                        <td>52</td>
                                        <td>10-Sep-2016</td>
                    <td>
                      <a href="#" class="btn btn-fab btn-fab-mini btn-info" title="View Details" data-toggle="modal" data-target="#myModal"><i class="material-icons">search</i></a>
                      <a href="#" class="btn btn-fab btn-fab-mini btn-warning" title="Unpin this feedback"><i class="material-icons">visibility_off</i></a>
                      <a href="#" class="btn btn-fab btn-fab-mini btn-danger" title="Delete this feedback"><i class="material-icons">delete_forever</i></a>
                    </td>
                                      </tr>

                                      <tr>
                                        <td>Apple Products</td>
                                        <td>958</td>
                                        <td>11-May-2017</td>
                    <td>
                      <a href="#" class="btn btn-fab btn-fab-mini btn-info" title="View Details" data-toggle="modal" data-target="#myModal"><i class="material-icons">search</i></a>
                      <a href="#" class="btn btn-fab btn-fab-mini btn-warning" title="Unpin this feedback"><i class="material-icons">visibility_off</i></a>
                      <a href="#" class="btn btn-fab btn-fab-mini btn-danger" title="Delete this feedback"><i class="material-icons">delete_forever</i></a>
                    </td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>
                      </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'MainDash'
  }
</script>