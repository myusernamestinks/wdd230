document.addEventListener("DOMContentLoaded", function () {
    const rentalsContainer = document.getElementById("rentals-container");

    fetch("rentals.json")
        .then(response => response.json())
        .then(data => {
            data.rentals.forEach(rental => {
                const rentalCard = `
                    <div class="rental-card">
                        <img src="${rental.image_link}" alt="${rental.type}" class="rental-image">
                        <h2 class="rental-title">${rental.type}</h2>
                        <p class="rental-details">Max Persons: ${rental.max_persons}</p>
                        <div class="price-info">
                            <p class="price-reservation">Reservation:</p>
                            <p>Half Day (3 hrs): $${rental.reservation.half_day}</p>
                            <p>Full Day: $${rental.reservation.full_day}</p>
                        </div>
                        <div class="price-info">
                            <p class="price-walk-in">Walk-In:</p>
                            <p>Half Day (3 hrs): $${rental.walk_in.half_day}</p>
                            <p>Full Day: $${rental.walk_in.full_day}</p>
                        </div>
                    </div>
                `;
                rentalsContainer.insertAdjacentHTML("beforeend", rentalCard);
            });
        })
        .catch(error => console.log("Error fetching rental data:", error));
});
