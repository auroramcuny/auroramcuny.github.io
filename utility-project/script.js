function csvToJson(csvText) {
    const lines = csvText.trim().split('\n');
    const headers = lines[0].split(',');
    return lines.slice(1).map(line => {
      const values = line.split(',');
      return headers.reduce((obj, key, i) => {
        obj[key.trim()] = values[i].trim();
        return obj;
      }, {});
    });
  }

  async function fetchAndDisplayData() {
    const response = await fetch('treesCDN.csv');
    const csvText = await response.text();
    const data = csvToJson(csvText);

    // Aggregate by neighborhood
    const neighborhoodCounts = {};
    data.forEach(tree => {
      const hood = tree.neighborhood;
      if (!neighborhoodCounts[hood]) {
        neighborhoodCounts[hood] = 0;
      }
      neighborhoodCounts[hood]++;
    });

    // Get the max for comparison
    const max = Math.max(...Object.values(neighborhoodCounts));

    // Change this to whatever neighborhood the user selects or lives in
    const currentNeighborhood = "Williamsburg"; // example
    const count = neighborhoodCounts[currentNeighborhood] || 0;
    const risk = Math.round((count / max) * 100);

    // Update the DOM
    document.getElementById('treeCount').textContent = count;
    document.getElementById('percentageRisk').textContent = `${risk}% more likely`;
  }

  // Helper function to parse CSV
  function csvToJson(csvText) {
    const lines = csvText.trim().split('\n');
    const headers = lines[0].split(',');
    return lines.slice(1).map(line => {
      const values = line.split(',');
      return headers.reduce((obj, key, i) => {
        obj[key.trim()] = values[i].trim();
        return obj;
      }, {});
    });
}

fetchAndDisplayData();
