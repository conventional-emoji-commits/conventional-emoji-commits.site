# FAQ


::disclosure{type="success" icon="pajamas:question"}
How should I deal with commit messages in the initial development phase?

#content
We recommend that you proceed as if you’ve already released the product. Typically somebody, even if it’s your fellow software developers, is using your software. They’ll want to know what’s fixed, what breaks etc.
::
:br
::disclosure{type="success" icon="pajamas:question"}
Are the emojis in the commit title specific or can I choose my own?

#content
While the emojis provided in the [Conventional Emoji Commits list](/list/list) offer a guideline, you can choose your own for custom scopes. However, be aware that using custom emojis might cause automated tools to malfunction, as the data extraction of these emojis could potentially fail. It's best to be consistent across your project. If you believe a specific emoji should be added to the standard list, consider submitting a [PR](https://github.com/conventional-emoji-commits/conventional-emoji-commits.site/pulls).
::
:br
::disclosure{type="success" icon="pajamas:question"}
What do I do if the commit conforms to more than one of the commit types? 

#content
Go back and make multiple commits whenever possible. Part of the benefit of Conventional Emoji Commits is its ability to drive us to make more organized commits and PRs.
::
:br
::disclosure{type="success" icon="pajamas:question"}
Doesn’t this discourage rapid development and fast iteration?  

#content
It discourages moving fast in a disorganized way. It helps you be able to move fast long term across multiple projects with varied contributors.
::
:br
::disclosure{type="success" icon="pajamas:question"}
Might Conventional Emoji Commits lead developers to limit the type of commits they make because they’ll be thinking in the types provided?  

#content
Conventional Emoji Commits encourages us to make more of certain types of commits such as fixes. Other than that, the flexibility of Conventional Emoji Commits allows your team to come up with their own types and change those types over time.
::
:br
::disclosure{type="success" icon="pajamas:question"}
How does this relate to SemVer?  

#content
`🩹 fix` type commits should be translated to PATCH releases. `✨ feat` type commits should be translated to MINOR releases. Commits with `🚨 BREAKING CHANGE` in the commits, regardless of type, should be translated to MAJOR releases.
::
:br
::disclosure{type="success" icon="pajamas:question"}
How should I version my extensions to the Conventional Emoji Commits Specification, e.g. @peterParker/conventional-emoji-commit-spec?  

#content
We recommend using SemVer to release your own extensions to this specification (and encourage you to make these extensions!)
::
:br
::disclosure{type="success" icon="pajamas:question"}
What do I do if I accidentally use the wrong emoji or commit type? 

#content
Prior to merging or releasing the mistake, we recommend using `git rebase -i` to edit the commit history. After release, the cleanup will be different according to what tools and processes you use.
::
:br
::disclosure{type="success" icon="pajamas:question"}
Do all my contributors need to use the Conventional Emoji Commits specification? 

#content
No! If you use a squash based workflow on Git, lead maintainers can clean up the commit messages as they’re merged—adding no workload to casual committers. A common workflow for this is to have your git system automatically squash commits from a pull request and present a form for the lead maintainer to enter the proper git commit message for the merge.
::
:br
::disclosure{type="success" icon="pajamas:question"}
How does Conventional Emoji Commits handle revert commits? 

#content
Reverting code can be complicated: are you reverting multiple commits? if you revert a feature, should the next release instead be a patch?  
Conventional Emoji Commits does not make an explicit effort to define revert behavior. Instead, we leave it to tooling authors to use the flexibility of types and footers to develop their logic for handling reverts.  
One recommendation is to use the `revert` type, and a footer that references the commit SHAs that are being reverted:
::callout{type="info"}  
`revert: let us never again speak of the noodle incident`  
`Refs: 676104e, a215868`
::
::

