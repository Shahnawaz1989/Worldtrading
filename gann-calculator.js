<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>World Trading</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#market-data">Market Data</a></li>
                <li><a href="#technical-analysis">Technical Analysis</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#community">Community</a></li>
                <li><a href="#login">Login/Sign Up</a></li>
                <li><a href="#gann-calculator">Gann Square of Nine Calculator</a></li> <!-- Added link for the calculator -->
            </ul>
        </nav>
    </header>
    
    <section id="hero">
        <h1>Welcome to World Trading</h1>
        <p>Your source for real-time market data and technical analysis tools.</p>
        <a href="#learn-more" class="btn">Learn More</a>
    </section>

    <section id="market-data">
        <h2>Market Data</h2>
        <!-- Add market data content here -->
    </section>

    <section id="technical-analysis">
        <h2>Technical Analysis</h2>
        <!-- Add technical analysis content here -->
    </section>

    <section id="education">
        <h2>Education</h2>
        <!-- Add education content here -->
    </section>

    <section id="community">
        <h2>Community</h2>
        <!-- Add community content here -->
    </section>

    <section id="gann-calculator">
        <h2>Gann Square of Nine Calculator</h2>
        <div>
            <!-- Calculator form goes here -->
            <label for="start-price">Start Price:</label>
            <input type="text" id="start-price">
            <button onclick="calculateGann()">Calculate</button>
            <p id="result"></p>
        </div>
    </section>

    <footer>
        <div>
            <ul>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">About Us</a></li>
            </ul>
        </div>
        <div>
            <p>Follow Us:</p>
            <a href="#" class="social-icon">Facebook</a>
            <a href="#" class="social-icon">Twitter</a>
            <a href="#" class="social-icon">LinkedIn</a>
        </div>
    </footer>

    <script src="script.js"></script>
    <script src="gann-calculator.js"></script> <!-- Include JavaScript file for the calculator -->
</body>
</html>
