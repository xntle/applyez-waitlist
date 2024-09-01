import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const data = req.body;

      // Construct the path to the output.json file
      const filePath = path.join(process.cwd(), 'src/app/Upload/output.json');

      // Write the data to output.json
      await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');

      res.status(200).json({ message: 'File written successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to write file' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
