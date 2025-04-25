// script.js

// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'yes') {
        // Flash rainbow colors
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayCatHeart(); // Display the cat-heart.gif
            
            // Create an array of messages to display
            const messages = [
                "Happy 2 month Gianna.",
                "Ever since the day I met you, there was something I knew deep down telling me that you are who I always needed, and never have I ever been so happy about my gut feeling because meeting you, experiencing you, and being with you made me happier than I ever thought possible.",
                "I Love you. In a way that can never be described, in a way that words can't begin to comprehend, and in a way where it makes me want to explode. You might not get it but every action, every text, every gesture comes from so deep within my soul. You have never stopped making me feel like the most important person in the whole wide universe and I want you to feel the same when I talk to you.",
                "I love you like the sun loves the earth, I love you like a flower loves a bee, I love you like a 2000s romance drama, like a smoky window night in a car, or like a painter loves his creation. My love looks like a field of tulips with the setting sun overhead, My love looks like Gianna Cantore, walking down that aisle in a white dress walking to the altar where I stand, where I have finally cried after years, where I stand there and suddenly all the days where we might have fought or tried a little less, and all the days where I worried and you were there, all the nights where I hated myself but you showed me the love inside me, all the times where I hugged you and felt like everything will be alright. That is what my love looks like.",
                "I have flaws, problems. I overthink, I am clingy, I hate when I am not the only one who gets your attention, I don't like when other guys talk to you, I hate when you tell me about things that you didn't like, and I hate when you're busy, tired, or in a mood, when you aren't super duper loving, but even though I have all these flaws, one day I am super narcissistic and the next I am a sad sack. All these problems I have one person that makes me love even these. That special person is you Gianna, I love you so much. So will you do me the greatest honor there is and not just make me the happiest bf anymore but the happiest man every day, and let death do us part. Will you marry me Gianna Cantore?"
            ];

            // Function to display messages one by one
            function displayMessages(index) {
                if (index < messages.length) {
                    const messageElement = document.createElement('div');
                    messageElement.innerText = messages[index];
                    messageElement.style.opacity = 0; // Start invisible
                    messageElement.style.transition = 'opacity 1s'; // Fade in transition
                    document.body.appendChild(messageElement);

                    // Fade in the message
                    setTimeout(() => {
                        messageElement.style.opacity = 1;
                    }, 100);

                    // Move to the next message after a delay
                    setTimeout(() => {
                        displayMessages(index + 1);
                    }, 5000); // Display each message for 5 seconds
                }
            }

            // Start displaying messages
            displayMessages(0);
        });
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'You sure?'; 
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by * 2
        yesButton.style.fontSize = newSize + 'px';
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}
// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the cat.gif initially
function displayCat() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat
    var catImage = new Image();
    // Set the source (file path) for the cat image
    catImage.src = 'cat.gif'; // Assuming the cat image is named "cat.gif"
    // Set alternative text for the image (for accessibility)
    catImage.alt = 'Cat';
    // When the cat image is fully loaded, add it to the image container
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

// Function to display the cat-heart.gif
function displayCatHeart() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat-heart
    var catHeartImage = new Image();
    // Set the source (file path) for the cat-heart image
    catHeartImage.src = 'cat-heart.gif'; // Assuming the cat-heart image is named "cat-heart.gif"
    // Set alternative text for the image (for accessibility)
    catHeartImage.alt = 'Cat Heart';
    // When the cat-heart image is fully loaded, add it to the image container
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        // Hide the options container
        document.getElementById('options').style.display = 'none';
    };
}

// Display the cat.gif initially
displayCat();