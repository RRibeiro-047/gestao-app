import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const port = 3333;

app.use(cors());
app.use(express.json());

// Tipos
type Center = { id: string; name: string; description?: string };
type Expense = { id: string; centerId: string; description: string; value: number; date: string };

// "Banco de dados" em memória
const centers: Center[] = [
  { id: uuidv4(), name: 'Supermercado' },
  { id: uuidv4(), name: 'Transporte' },
  { id: uuidv4(), name: 'Lazer' }
];

const expenses: Expense[] = [
  { id: uuidv4(), centerId: centers[0].id, description: 'Compra mensal', value: 500, date: '2025-09-01' },
  { id: uuidv4(), centerId: centers[1].id, description: 'Uber', value: 40, date: '2025-09-05' }
];

// Rotas de Centros
app.get('/api/centers', (req, res) => res.json(centers));
app.post('/api/centers', (req, res) => {
  const newCenter: Center = { id: uuidv4(), ...req.body };
  centers.push(newCenter);
  res.status(201).json(newCenter);
});
app.delete('/api/centers/:id', (req, res) => {
  const index = centers.findIndex(c => c.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Not found' });
  centers.splice(index, 1);
  res.status(204).send();
});

// Rotas de Despesas
app.get('/api/expenses', (req, res) => res.json(expenses));
app.post('/api/expenses', (req, res) => {
  const newExpense: Expense = { id: uuidv4(), ...req.body };
  expenses.push(newExpense);
  res.status(201).json(newExpense);
});
app.delete('/api/expenses/:id', (req, res) => {
  const index = expenses.findIndex(e => e.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Not found' });
  expenses.splice(index, 1);
  res.status(204).send();
});

// Rota de Dashboard (resumo por centro no mês)
app.get('/api/dashboard', (req, res) => {
  const month = (req.query.month as string) || new Date().toISOString().slice(0, 7); // YYYY-MM
  const filtered = expenses.filter(e => e.date.startsWith(month));
  const summary = centers.map(c => {
    const total = filtered.filter(e => e.centerId === c.id).reduce((sum, e) => sum + e.value, 0);
    return { center: c.name, total };
  });
  const totalAll = summary.reduce((s, c) => s + c.total, 0);
  res.json({ month, summary, total: totalAll });
});

// Start
app.listen(port, () => {
  console.log(`✅ API rodando em http://localhost:${port}`);
});
