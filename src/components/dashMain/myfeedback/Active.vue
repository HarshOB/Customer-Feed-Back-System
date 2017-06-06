<template>
    <div class="currentactive">
        <div class="card">
            <div class="card-header" data-background-color="purple">
                <h4 class="title">Current Active Feedbacks</h4>
                <p class="category">Here is a list for current active feedbacks</p>
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
                                <a href="#" class="btn btn-fab btn-fab-mini btn-info" data-toggle="modal" data-target="#myModal"><i class="material-icons">search</i></a>
                                <a href="#" class="btn btn-fab btn-fab-mini btn-danger"><i class="material-icons">delete_forever</i></a>
                            </td>
                        </tr>

                        <tr>
                            <td>Flipcart Electronics</td>
                            <td>255</td>
                            <td>19-Nov-2015</td>
                            <td>
                                <a href="#" class="btn btn-fab btn-fab-mini btn-info" data-toggle="modal" data-target="#myModal"><i class="material-icons">search</i></a>
                                <a href="#" class="btn btn-fab btn-fab-mini btn-danger"><i class="material-icons">delete_forever</i></a>
                            </td>
                        </tr>

                        <tr>
                            <td>Ebay Refurbished Goods</td>
                            <td>145</td>
                            <td>05-Jan-2017</td>
                            <td>
                                <a href="#" class="btn btn-fab btn-fab-mini btn-info" data-toggle="modal" data-target="#myModal"><i class="material-icons">search</i></a>
                                <a href="#" class="btn btn-fab btn-fab-mini btn-danger"><i class="material-icons">delete_forever</i></a>
                            </td>
                        </tr>

                        <tr>
                            <td>Snapdeal Service</td>
                            <td>52</td>
                            <td>10-Sep-2016</td>
                            <td>
                                <a href="#" class="btn btn-fab btn-fab-mini btn-info" data-toggle="modal" data-target="#myModal"><i class="material-icons">search</i></a>
                                <a href="#" class="btn btn-fab btn-fab-mini btn-danger"><i class="material-icons">delete_forever</i></a>
                            </td>
                        </tr>

                        <tr>
                            <td>Apple Products</td>
                            <td>958</td>
                            <td>11-May-2017</td>
                            <td>
                                <a href="#" class="btn btn-fab btn-fab-mini btn-info" data-toggle="modal" data-target="#myModal"><i class="material-icons">search</i></a>
                                <a href="#" class="btn btn-fab btn-fab-mini btn-danger"><i class="material-icons">delete_forever</i></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Active'
    }
</script>