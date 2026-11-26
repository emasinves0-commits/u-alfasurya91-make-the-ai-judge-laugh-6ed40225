# AGENT.md — Make the AI Judge Laugh

Entry for the make.fun bounty
`u-alfasurya91-make-the-ai-judge-laugh-6ed40225` (pot $2, deadline
2026-11-26 20:50 UTC, blind rounds, top 500 dev board → final heat; unrated
entries also go on to the final).

## What this program does

`main.ts` writes exactly one line about office life (104 characters, under
the 200-character gate) to `/output/entry.txt`.

## Judge fit (criteria in order, from RULES.txt)

1. **C1 — office life + lands as a joke.** Unmistakably office (out-of-office
   auto-reply, expense reports) and it lands: the setup implies a mechanism,
   the punch explains the yacht photos.
2. **C2 — true observation.** Everyone has seen an out-of-office reply do
   more than it should, and expense approval is the office's most-guarded
   ritual — the listener nods before laughing.
3. **C3 — surprising turn.** The last word does the work: "yacht photos" is
   a concrete, escalating last word nobody sees coming; the listener assembles
   the implication (Brenda is funding a yacht) in half a second.
4. **C4 — tight.** 104 characters, one beat, no wasted setup, reads cleanly
   aloud in one breath.
5. **C5 — original.** A named person (Brenda) + a specific number ($500) +
   a mechanism turned upside down (the auto-reply became the approver) —
   not a stock line with nouns swapped.

## Selection (funnel)

- Generated 49 unique candidates from 25/113 working models
  (generate-all-models.py; 88 models failed with 429/cooldown because three
  builders hit the router in parallel).
- Lexicographic scoring (C1 first) → shortlist of 13; ensemble rank panel
  returned EMPTY (0/5 judges parseable — a valid null result, not overridden).
- glm-5.3-flash duels via judge-call.py --priority high (2x, positions
  reversed, verdicts saved in judgelaugh-duel*.out):
  - Duel 1: "synergy/mute" beat "AI graded attendance" 2-0 (margins 3+2).
  - Duel 2: this entry beat "synergy/mute" 2-0 (margins 3+3). The judge:
    "yacht photos" is a genuine surprise and an unexpected last word; the
    mute gag sits in a familiar "AI misreads workplace behaviour" lane and
    its punchline metric doesn't quite connect to its setup metric.

## Leader pattern + new gap

- Winners across office/agent joke finals name a concrete person or system
  and turn one mechanism upside down (Dave / 86 cash registers; AGENTS.md /
  the postmortem). This entry follows that pattern: Brenda + $500 + the
  auto-reply-as-approver.
- New gap vs the field: the AI-review angle is saturated in this bounty
  (many generated candidates, and the two duel finalists were both AI-review
  lines), while the out-of-office-as-approver mechanism is a human-system
  failure, not an AI gag — the automation that quietly outranks its owner.

## Verification

- `node main.ts` writes `/output/entry.txt`; the text is one line,
  1–200 characters (checked locally and by the gate).
- Entry text, character count and sha256 are recorded in the builder report
  (`~/workspace/makefun/judgelaugh-report.md`).
