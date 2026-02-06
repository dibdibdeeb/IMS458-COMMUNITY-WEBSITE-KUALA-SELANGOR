function openModal(type) {
    const modal = document.getElementById("facilityModal");
    const body = document.getElementById("modalBody");

    let content = "";

    if (type === "eco") {
        content = `
            <h2>Eco-Tourism & Nature</h2>
            <img src="picture/ksnp.jpg">
            <ul>
                <li>
                    <a href="https://share.google/GRQFjVHckrycTkRzt" target="_blank">
                    Kuala Selangor Nature Park (KSNP)
                    </a>
                </li>
                <li>
                    <a href="https://share.google/2rf9kNSRklIIFlPz1" target="_blank">
                    Mangrove forests
                    </a>
                </li>
                <li>
                    <a href="https://share.google/CsfjnY1QTyG3Xzn5E" target="_blank">
                    Hiking trails
                    </a>
                </li>
                <li>
                    <a href="https://share.google/zqukTjVCZUDGy38B8" target="_blank">
                    Bird hides & observation towers
                    </a>
                </li>
            </ul>`;
    }

    if (type === "marine") {
        content = `
            <h2>Marine & River Tours</h2>
            <img src="picture/sky mirror.jpg">
            <ul>
                <li>Sky Mirror Tour</li>
                <li>Firefly watching</li>
                <li>Eagle feeding</li>
                <li>Blue Tears (Bioluminescent algae)</li>
            </ul>`;
    }

    if (type === "history") {
        content = `
            <h2>Historical Sites</h2>
            <img src="picture/melawati.jpg">
            <ul>
                <li>Bukit Melawati</li>
                <li>Altingsburg Lighthouse</li>
                <li>Old cannon remnants</li>
                <li>Melawati Museum</li>
            </ul>`;
    }

    if (type === "stay") {
        content = `
            <h2>Accommodation</h2>
            <img src="picture/resort.jpg">
            <ul>
                <li>Firefly Park Resort</li>
                <li>Hotel Le-Shore</li>
                <li>Nature Park Chalets</li>
            </ul>`;
    }

    if (type === "food") {
        content = `
            <h2>Dining</h2>
            <img src="picture/restoran.jpg">
            <ul>
                <li>Seafood restaurants at Pasir Penambang</li>
                <li>Fresh seafood & local dishes</li>
            </ul>`;
    }

    if (type === "culture") {
        content = `
            <h2>Cultural Sites</h2>
            <img src="picture/temple2.jpg">
            <ul>
                <li>Sri Shakti Dhevasthanam Temple</li>
                <li>Bukit Rotan</li>
            </ul>`;
    }

    if (type === "recreation") {
        content = `
            <h2>Recreation</h2>
            <img src="picture/atv.jpg">
            <ul>
                <li>Hussin Fauzi Farm</li>
                <li>Sasaran Art Park</li>
                <li>ATV Adventure Rides</li>
            </ul>`;
    }

    body.innerHTML = content;
    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("facilityModal").style.display = "none";
}