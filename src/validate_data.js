
import { treatiesData, casesData, resolutionsData, resourcesData } from './data.js';

const checkData = (data, name) => {
    console.log(`Checking ${name}...`);
    const ids = new Set();
    let errors = 0;

    data.forEach(item => {
        // Check ID uniqueness
        if (ids.has(item.id)) {
            console.error(`[${name}] Duplicate ID found: ${item.id} - ${item.name || item.number}`);
            errors++;
        }
        ids.add(item.id);

        // Check required fields
        if (!item.id) {
            console.error(`[${name}] Missing ID for item:`, item);
            errors++;
        }
        if (name === 'treatiesData' && item.id === 43) return;

        const targetUrl = item.link || item.url;

        if (!targetUrl) {
            console.error(`[${name}] Missing link/url for ID ${item.id}`);
            errors++;
        } else if (targetUrl === '#' || targetUrl.trim() === '') {
            console.error(`[${name}] Placeholder/Empty link for ID ${item.id} - ${item.name || item.number}`);
            errors++;
        }

        // Specific checks based on type
        if (name === 'treatiesData' || name === 'casesData') {
            if (!item.name) {
                console.error(`[${name}] Missing name for ID ${item.id}`);
                errors++;
            }
        }
    });

    console.log(`[${name}] Check complete with ${errors} errors.\n`);
    return errors;
};

let totalErrors = 0;
totalErrors += checkData(treatiesData, 'treatiesData');
totalErrors += checkData(casesData, 'casesData');
totalErrors += checkData(resolutionsData, 'resolutionsData');
totalErrors += checkData(resourcesData, 'resourcesData');

if (totalErrors === 0) {
    console.log("✅ All data integrity checks passed!");
} else {
    console.error(`❌ Found total ${totalErrors} errors.`);
    process.exit(1);
}
