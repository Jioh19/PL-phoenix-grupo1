const URL = 'https://fakestoreapi.com/products';

function getProduct(URL) {
	fetch(URL)
		.then((res) => res.json())
		.then((json) => {
			const products = document.querySelector('.products');
			json.forEach((product) => {
				products.innerHTML += `<div class="card">
					<p class="product-id">${product.id}</p>
					<p class="product-title">${product.title}</p>
					<p class="product-price">${product.price}</p>
					<a href="${product.image}"
						><img
							src="${product.image}"
							alt="${product.title}"
							class="product-image"
					/></a>
				</div>`;
			});
			console.log(json);
		})
		.catch((err) => console.error(err.message));
}

getProduct(URL);
