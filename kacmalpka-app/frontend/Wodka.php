<?php
include("header.php");
?>
    <style>
        .product-card {
            border: 1px solid #ddd;
            border-radius: 5px;
            margin: 10px;
            padding: 10px;
        }

        .product-image {
            max-width: 100%;
            height: auto;
        }

        .product-title {
            font-weight: bold;
        }

        .product-price {
            color: #e67e22;
        }

        .add-to-cart-button {
            background-color: #007bff;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
        }

        .add-to-cart-button:hover {
            background-color: #0056b3;
        }
    </style>
<body>

<div class="container">
    <div class="row">
        <div class="col-md-4">
            <div class="product-card">
                <img src="product1.jpg" class="product-image" alt="Produkt 1">
                <h5 class="product-title">Produkt 1</h5>
                <p>Opis produktu 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p class="product-price"><strong>Cena: $19.99</strong></p>
                <button class="add-to-cart-button">Dodaj do koszyka</button>
            </div>
        </div>

        <div class="col-md-4">
            <div class="product-card">
                <img src="product2.jpg" class="product-image" alt="Produkt 2">
                <h5 class="product-title">Produkt 2</h5>
                <p>Opis produktu 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p class="product-price"><strong>Cena: $29.99</strong></p>
                <button class="add-to-cart-button">Dodaj do koszyka</button>
            </div>
        </div>

        <div class="col-md-4">
            <div class="product-card">
                <img src="product3.jpg" class="product-image" alt="Produkt 3">
                <h5 class="product-title">Produkt 3</h5>
                <p>Opis produktu 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p class="product-price"><strong>Cena: $39.99</strong></p>
                <button class="add-to-cart-button">Dodaj do koszyka</button>
            </div>
        </div>
    </div>
</div>
<?php
include("footer.php");
?>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
