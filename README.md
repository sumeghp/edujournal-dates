# Edu journal calls

Countdowns to special-issue deadlines in education journals: AI in education, learning analytics and the learning sciences, computing and STEM education, technology-enhanced learning, higher and online education, engineering education, education research and policy, and comparative and international education.

**Live site:** https://sumeghp.github.io/edujournal-dates/

Most journals take regular submissions all year, so this site tracks the calls that do have fixed dates: **special issues, special sections and article collections**. Many of these run in two stages (an abstract or proposal first, then full papers from invited authors only), and each stage gets its own countdown.

It is the journal counterpart to [Edu conferences dates](https://github.com/sumeghp/educonf-dates), inspired by [aideadlin.es](https://aideadlin.es/). A sister site, [DH conferences dates](https://github.com/sumeghp/dhconf-dates), tracks digital humanities conferences.

## Features

- Live countdowns for every deadline, with the next one front and centre
- A six-week calendar showing each deadline on its day
- Filters by topic, publisher and status, an **Open access** toggle, plus search across journals, call titles and guest editors
- Sorting by next deadline, most time left, final deadline or journal name
- Journal details for each call: publisher, publishing model (open access, diamond OA, hybrid, subscription) and, where the publisher states them, metrics
- Times shown in your own time zone, Anywhere on Earth, IST, UTC and others
- Star the calls you care about (saved in your browser)
- One-click Google Calendar links, or copy deadlines as `.ics`
- Dark mode and an OpenDyslexic font option

## How reliable are the dates?

Every deadline carries a status:

| Status | Meaning |
|---|---|
| **announced** | On the journal's or publisher's own call page |
| **provisional** | From a third-party listing or an editor's post, not yet confirmed on the journal page |
| **estimated** | The call isn't out yet; the date follows an earlier pattern |

Deadlines without a stated time zone are treated as 23:59 Anywhere on Earth (UTC−12). Always check the call itself before planning around a date.

## Add or correct a call

All data lives in [`data.js`](data.js). Add the journal once to `JOURNALS`:

```js
sle: { short: "SLE", name: "Smart Learning Environments", publisher: "Springer",
       model: "Open access",            // Open access | Diamond OA | Hybrid | Subscription
       metric: "JIF 17.9 (2025)",       // optional; only if the publisher's page states it
       url: "https://link.springer.com/journal/40561" }
```

Then add each call to `CALLS`:

```js
{
  id: "sle-assess", journal: "sle", topics: ["aied", "la"],   // keys from TOPICS
  title: "Reimagining assessment for learning in the age of generative AI",
  editors: "Yizhou Fan, Ryan S. Baker, …",                     // optional
  url: "https://link.springer.com/collections/eeigbjiafi",
  note: "Optional note shown in the details",
  deadlines: [
    { label: "Abstracts", date: "2026-11-30", status: "announced" },
    { label: "Full manuscripts (invited)", date: "2027-03-31", status: "announced" }
  ]
}
```

Deadline fields: `date` (YYYY-MM-DD), optional `time` (HH:MM, default 23:59), optional `tz` (`AoE` by default, or `UTC`, or an IANA zone like `Europe/London`), `status`, and an optional `note`.

To contribute:

1. **Open an issue** using the "Suggest a call" template, with a link to the call for papers, or
2. **Send a pull request** editing `data.js`. Please link the source in the PR description.

## Running locally

It's a static site with no build step. Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server
```

## Credits

- Built by [Sumegh P](https://github.com/sumeghp)
- [OpenDyslexic](https://opendyslexic.org/) font by Abbie Gonzalez, used under the SIL Open Font License
- Fonts: Bricolage Grotesque and Instrument Sans via Google Fonts

If this saves you a missed deadline, you can [buy me a coffee](https://buymeacoffee.com/sumeghp).

## Licence

Code: MIT (see [LICENSE](LICENSE)). Call information is collected from public calls for papers.
