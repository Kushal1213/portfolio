const links = [
  ['GitHub profile', 'https://github.com/Kushal1213'],
  ['LinkedIn profile', 'https://www.linkedin.com/in/kushal-choudhary-8044a227b/'],
  ['Cuepoint repository', 'https://github.com/Kushal1213/cuepoint'],
  ['Cuepoint product', 'https://kushal1213.github.io/cuepoint/'],
  ['Veyra repository', 'https://github.com/Kushal1213/darwinxvapi'],
  ['KaamKaaj repository', 'https://github.com/Kushal1213/kaamkaaj'],
  ['KaamKaaj product', 'https://kushal1213.github.io/kaamkaaj/'],
  ['GPT From Scratch', 'https://github.com/Kushal1213/neetcode-gpt'],
  ['RAG project', 'https://github.com/Kushal1213/rag-task'],
  ['Fraud detection repository', 'https://github.com/Kushal1213/fraud-detection'],
  ['Fraud detection demo', 'https://frontend-tawny-gamma-75.vercel.app/'],
  ['Xeno repository', 'https://github.com/Kushal1213/shopify'],
  ['Xeno demo', 'https://shopify-main-eight.vercel.app/'],
  ['QueryCraft repository', 'https://github.com/Kushal1213/querycraft'],
  ['QueryCraft demo', 'https://querycraft.tech/'],
  ['Sleep Oracle repository', 'https://github.com/Kushal1213/Sleep-Oracle'],
]

const results = await Promise.all(links.map(async ([name, url]) => {
  try {
    const response = await fetch(url, {
      redirect: 'follow',
      headers: { 'user-agent': 'Kushal-portfolio-link-check/1.0' },
      signal: AbortSignal.timeout(20_000),
    })
    const antiBotResponse = url.includes('linkedin.com') && response.status === 999
    return { name, status: response.status, ok: (response.status >= 200 && response.status < 400) || antiBotResponse, url }
  } catch (error) {
    return { name, status: 'ERROR', ok: false, url, detail: error instanceof Error ? error.message : String(error) }
  }
}))

console.table(results.map(({ name, status, ok, url }) => ({ name, status, ok, url })))

const failures = results.filter((result) => !result.ok)
if (failures.length > 0) {
  console.error(`Link check failed for ${failures.length} destination(s).`)
  process.exitCode = 1
}
