const request = require('supertest');
const app = require('../../server'); // chemin vers votre fichier app.js
const productService = require('../../services/shop/product.service');

jest.mock('../../services/shop/product.service'); // simuler le service produit

describe("product controller", () => {
    describe("GET /products", () => {
        const mockData = { products: [], total: 0 };
        productService.getAll.mockResolvedValue(mockData); // nous supposons que le service renvoie toujours cette valeur

        it("should return a list of products", async () => {
            // faire une requête get à l'endpoint /products
            const res = await request(app).get('/products');

            // s'assurer que le service a été appelé une fois
            expect(productService.getAll).toHaveBeenCalledTimes(1);

            // vérifier que la réponse a le statut 200 OK
            expect(res.status).toBe(200);
            // vérifier que la réponse est sous le bon format
            expect(res.body.data).toEqual(mockData);
        });
    });
});