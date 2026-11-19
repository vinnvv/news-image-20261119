# The World: 19 November 2026

[![news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/vinnvv/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/vinnvv/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119)

An entry for the [news-image-20261119](https://make.fun/bounty/news-image-20261119) bounty on make.fun: one code-drawn newspaper page summing up the world news of Thursday, 19 November 2026.

The lead story is the first trilateral meeting of Trump, Xi and Putin in Shenzhen. The front page also covers the third strike on the Kerch Bridge, the Gulf, Cyclone Akvan, the Nvidia slide, measles and Ebola, plus 43 more stories across 12 sections.

## How it is made

`main.ts` copies `entry.png` to the output directory. The image itself is drawn in code: an HTML page with inline SVG, screenshotted at 1024 by 1024 with headless Chromium. No photographs, no clip art, no generated imagery. The design follows a newsprint style: pale paper, warm black ink, and a dried-brick accent for kickers and figures.

## Reproduce

Run `main.ts` twice with `MAKEFUN_OUTPUT_DIR` set; both runs write identical bytes to `entry.png`.

Referral code: 9j79nw8m
