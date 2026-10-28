document.addEventListener("DOMContentLoaded", () => {
    const tombol = document.getElementById("tombolKlik");

    if (!tombol) {
        return;
    }

    tombol.addEventListener("click", () => {
        let pesan = document.getElementById("pesan");

        // Buat elemen pesan jika belum tersedia
        if (!pesan) {
            pesan = document.createElement("p");
            pesan.id = "pesan";
            pesan.setAttribute("role", "status");

            tombol.insertAdjacentElement("afterend", pesan);
        }

        // Tampilkan pesan saat tombol diklik
        pesan.textContent = "Halo! Tombol berhasil diklik.";
    });
});
