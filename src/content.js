
export const projects = {
  firstshot: {
    category: '01 / APPLIED AI · PHYSICS-INFORMED ML', title: 'FirstShot',
    body: '<p>A paint colour-matching and reformulation tool that searches for the recipe with the fewest pigments matching a target under four light sources.</p><h3>The approach</h3><p>Kubelka–Munk physics combined with a neural-network ensemble trained on 14,000 lab panels. Built with Python, NumPy, scikit-learn, FastAPI, Docker, and AWS Lambda.</p><h3>The result</h3><ul><li>Right-first-time matches increased from 50% to 85% in a simulated lab.</li><li>Mean lab trials decreased from 2.27 to 1.38 in the simulation.</li><li>Recipe search became 24× faster.</li><li>Added reformulation of lead and cadmium legacy colours with compliant pigments.</li></ul><p class="fine">Lab improvements were measured in simulation.</p><a class="button dark" href="https://github.com/RudraMaharao/firstshot" target="_blank" rel="noopener noreferrer">Explore the source ↗</a>'
  },
  fireguard: {
    category: '02 / EDGE AI · EMBEDDED SYSTEMS', title: 'FireGuard',
    body: '<p>An offline, multi-sensor kitchen fire and smoke detector built around an ESP32-S3. The vision model runs entirely on the device.</p><h3>Small enough to work at the edge</h3><p>Compressed a YOLO11 model trained on 12,735 images to 12× fewer parameters. Model size fell from 19.1 MB to 0.96 MB, retaining 94% of its mAP50.</p><h3>More than a camera</h3><p>MQ-2, MQ-7, MQ-135, and BME280 sensor readings feed a danger score that wakes the camera and triggers 4G SMS alerts.</p><p><b>Toolkit:</b> PyTorch, YOLO11, C++, ESP-IDF, ESP32-S3, and Tinkercad.</p>'
  },
  accounting: {
    category: '03 / AUTOMATION · DOCUMENT INTELLIGENCE', title: 'CA Firm Automation',
    body: '<p>An accounting automation platform that extracts bank statements from PDFs, spreadsheets, scans, and phone images, then posts validated vouchers to TallyPrime.</p><h3>From varied inputs to consistent entries</h3><p>Achieved exact extraction across a test set of 11 statements in seven formats. Validation sits between extraction and posting.</p><h3>An offline AI assistant</h3><p>Local LLMs and vector search predict ledger classifications, flag mispostings, and retrieve Income-tax and GST provisions. The platform is backed by 109 automated tests.</p><p><b>Toolkit:</b> Python, SQL, SQLite, Tesseract OCR, pdfplumber, Flask, Ollama, RAG, Qdrant, and Linux.</p><p class="fine">Extraction results refer to the stated test set, not every possible bank statement.</p>'
  },
  nutrition: {
    category: '04 / DATA ANALYTICS · NUTRITION', title: 'What’s in the packet?',
    body: '<p>An analysis of Indian packaged food nutrition using approximately 19,000 Open Food Facts products.</p><h3>Make the data usable first</h3><p>Processed the data into MongoDB, built six aggregation pipelines, and improved the share of usable records from 41% to 78%.</p><h3>Then make it understandable</h3><p>A five-page Power BI dashboard explores nutritional quality and HFSS compliance, using DAX and a structured analytical model.</p><p><b>Toolkit:</b> MongoDB, Python, Power BI, and DAX.</p><p class="fine">The portfolio illustration is decorative. It does not represent individual product measurements.</p>'
  }
};
