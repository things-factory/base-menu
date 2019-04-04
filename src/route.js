export default function route(page) {
  switch (page) {
    case 'base-menu-main':
      import('./pages/main')
      return true
  }
}
