const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function hybernate(ms) {
    await sleep(ms);
}

export { hybernate };
