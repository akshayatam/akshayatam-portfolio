import {type StructureResolver} from 'sanity/structure'

const sections = [
  {type: 'project', title: 'Projects'},
  {type: 'blogPost', title: 'Blog Posts'},
  {type: 'journalEntry', title: 'Journal'},
  {type: 'openSourceContribution', title: 'Open Source Contributions'},
]

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items(
      sections.map(({type, title}) =>
        S.documentTypeListItem(type).title(title).child(S.documentTypeList(type).title(title)),
      ),
    )
