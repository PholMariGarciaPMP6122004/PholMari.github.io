document.addEventListener("DOMContentLoaded", function () {
    const restaurantInfo = {
        "gabel-loffel": {
            title: "GABEL LOFFEL",
            description: "Main Dishes 🍛 Our main dishes are crafted with passion and precision, bringing together the best ingredients and time-honored cooking techniques to create a truly unforgettable dining experience. Whether you're craving a hearty, slow-cooked stew, a perfectly grilled steak, or a vibrant vegetarian dish, our menu offers a variety of options to suit every palate. Each dish is carefully seasoned and cooked to perfection, ensuring a balance of rich flavors and satisfying textures. We take pride in using only the freshest produce, premium meats, and authentic spices to deliver a main course that leaves you coming back for more.",
            image: "Main course.jpg"
        },
        "gary-gari": {
            title: "GARY GARI",
            description: "Side Dishes 🥗 A great meal isn’t complete without the perfect side dish. Our selection of sides is designed to complement and elevate your main course, offering a variety of flavors and textures to enhance your dining experience. From crisp, garden-fresh salads with zesty dressings to creamy mashed potatoes, buttery roasted vegetables, and golden, crispy fries, our sides are made with high-quality ingredients and prepared with care. Whether you prefer something light and refreshing or rich and indulgent, our side dishes add the perfect finishing touch to your meal.",
            image: "Side Dish.jpg"
        },
        "il-piatto": {
            title: "IL PIATTO",
            description: "Drinks ☕ Complete your meal with our selection of refreshing beverages, designed to quench your thirst and enhance your overall dining experience. Choose from a variety of handcrafted cocktails, fresh fruit juices, and rich, aromatic coffees brewed to perfection. If you’re looking for something soothing, our selection of herbal teas offers a calming experience with every sip. For those who enjoy a bit of sparkle, we have an array of fine wines, craft beers, and bubbly sodas to pair with your meal. No matter your preference, our drinks menu has something for everyone, ensuring the perfect balance of flavors to accompany your food.",
            image: "Drinks.jpg"
        },
        "pierre-platters": {
            title: "PIERRE PLATTERS",
            description: "Desserts 🍰 Indulge in a sweet escape with our decadent dessert offerings. Each treat is crafted to satisfy your cravings, featuring a delightful blend of textures and flavors. Whether you’re in the mood for a classic chocolate lava cake with a molten center, a smooth and creamy cheesecake with a buttery graham cracker crust, or a selection of freshly baked pastries, our desserts are designed to leave a lasting impression. We also offer seasonal specialties and handcrafted sweets made with the finest ingredients, ensuring a dessert experience that is both memorable and satisfying.",
            image: "Sweets.jpg"
        }
    };

    function showInfo(restaurant) {
        if (!restaurantInfo[restaurant]) return;
    
        const info = restaurantInfo[restaurant];
        document.querySelector(".info-label").textContent = info.title;
        document.getElementById("info-title").textContent = info.title;
        document.getElementById("info-description").textContent = info.description;
        document.getElementById("info-image").src = info.image;
    
        const infoContainer = document.getElementById("restaurant-info");
        infoContainer.style.display = "flex";
        infoContainer.style.visibility = "visible";
    }
    

    function hideInfo() {
        const infoContainer = document.getElementById("restaurant-info");
        infoContainer.style.display = "none";
        infoContainer.style.visibility = "hidden";
    }
    

    document.querySelectorAll(".restaurant-card").forEach(card => {
        card.addEventListener("click", function () {
            showInfo(this.dataset.id);
        });
    });

    document.querySelector(".main-menu-btn").addEventListener("click", hideInfo);
});
