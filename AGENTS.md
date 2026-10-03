<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting published git history — force pushing, or rebasing/amending/squashing commits that are already pushed — as it rewrites history on Lovable's side and the user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep shared site chrome and repeated page sections in `src/components/SiteLayout.tsx` so every content route remains consistent.
- Keep supplied media pointers and service/review content in `src/lib/site-data.ts` so routes share one source of truth without binaries in git.
- Use separate TanStack content routes for each major site page so navigation and page metadata remain shareable.
