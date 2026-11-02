import { createServer } from 'node:http';

const server = createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('¡Bienvenido a tu Consulta Nutricional!\n');
    } else if (req.url === '/planes') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>Planes Alimenticios Personalizados</h1><p>Descubre el menú ideal para tus metas de salud.</p>');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>404 - Sección no encontrada</h1><p>La página de nutrición que buscas no existe.</p>');
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Servidor de consulta dietética activo en http://127.0.0.1:3000');
});
