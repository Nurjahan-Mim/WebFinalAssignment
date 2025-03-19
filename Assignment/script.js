function showDashboard() {
    document.getElementById("page-title").innerText = "Dashboard";
    document.getElementById("content").innerHTML = `
        <div class="dashboard">
            <div class="card purple"><h3>6</h3><p>Total Items</p></div>
            <div class="card blue"><h3>8</h3><p>Total Category</p></div>
            <div class="card orange"><h3>2</h3><p>Total Elements</p></div>
            <div class="card green"><h3>8225.77</h3><p>Total Sales</p></div>
            <div class="card dark-blue"><h3>5</h3><p>Paid Orders</p></div>
            <div class="card red"><h3>1</h3><p>Unpaid Orders</p></div>
            <div class="card teal"><h3>2</h3><p>Total Members</p></div>
            <div class="card brown"><h3>2</h3><p>Total Warehouse</p></div>
        </div>
    `;
}

function showProducts() {
    document.getElementById("page-title").innerText = "Products";
    document.getElementById("content").innerHTML = `
        <div class="product-list">
            <div class="product-card">
                <img src="images/P1.png" alt="Product 1">
                <h4>Product 1</h4>
                <p>30Tk</p>
            </div>
            <div class="product-card">
                <img src="images/p3.jpeg" alt="Product 2">
                <h4>Product 2</h4>
                <p>350Tk</p>
            </div>
            <div class="product-card">
                <img src="images/p4.jpeg" alt="Product 3">
                <h4>Product 3</h4>
                <p>175Tk</p>
            </div>
        </div>
    `;
}


function showSection(name) {
    document.getElementById("page-title").innerText = name;
    document.getElementById("content").innerHTML = `
        <div class="dashboard">
            <div class="card"><h3>Coming Soon</h3><p>${name} Details</p></div>
        </div>
    `;
}
