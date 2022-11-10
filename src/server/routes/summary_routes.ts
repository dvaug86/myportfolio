import { Router } from 'express';
import db from '../db';

const router = Router();


// Get /api/summary/summaryID - for individual
// Get /api/summary - for all
router.get('/:summaryID?', async (req, res) => {

    const summaryID = Number(req.params.summaryID); //route parameters are always string data types by default

    try {
        if (summaryID) {
            const [singleSummary] = await db.portfolio_queries.one(summaryID); //brackets to destructure
            res.json(singleSummary);
        } else {
            const allSummaries = await db.portfolio_queries.all();
            res.json(allSummaries);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'code is bunk', error: error.message })
    }
});

// POST /api/summary
//Request body {Title: string, Summary: string, Assignment: string, Link: string}
router.post('/', async (req, res) => {
    const newSummary = req.body;  //summaryDTO = data transfer object -> more standard instead of newSummary
   
    try {
        const result = await db.portfolio_queries.insert(newSummary);
        res.json({ msg: 'blog created', id: result.insertId });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'code is bunk again', error: error.message })
    }
});

router.put('/:summaryID', async (req, res) => {
    const summaryID = Number(req.params.summaryID)
    const editedSummary = req.body; //blogDTO is more standard practice for post request stands for data transferring object
    try {
        const result = await db.portfolio_queries.update(editedSummary, summaryID);
        res.json({ msg: `blog ${summaryID} edited`, affectedRows: result.affectedRows });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'code is bunk', error: error.message })
    }
});




// DELETE /api/summary/SummaryID?
router.delete('/:summaryID', async (req, res) => {
    const summaryID = Number(req.params.summaryID);
    try {
        const result = await db.portfolio_queries.obliterate(summaryID);
        res.json({msg: `summary ${summaryID} was obliterated`, affectedRows: result.affectedRows });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'code is bunk again', error: error.message })
    }
});

export default router;
