import express from 'express';

const router = express.Router();
router.use(express.json());

router.get('/', (req, res) => res.send('Animal route'));
router.get('/:prop_id', (req, res) => res.send(''));
router.post('/', (req, res) => res.send(''));
router.put('/', (req, res) => res.send(''));
router.delete('/:prop_id', (req, res) => res.send(''));
router.get('?proprietario_id={prop_id}', (req, res) => res.send(''));

export default router;