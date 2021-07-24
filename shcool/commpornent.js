Vue.component("navbar", {
  template: `
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-secondary">
      <div class="container-fluid">
        <a class="navbar-brand" href="../index.html">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="../business/index.html">ビジネス</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="01_レクチャー.html">スクール</a>
            </li>
          </ul>

          <!-- 右サイド -->
          <!-- <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> -->
        </div>
      </div>
    </nav>
`,
});
Vue.component("sidemenu", {
  template: `
  <ul class="col-md-2 sidemenu" style="list-style: none">
    <li><a href="01_レクチャー.html">レクチャー</a></li>
    <li><a href="02_選択問題.html">選択問題</a></li>
    <li><a href="03_言語学習.html">言語学習</a></li>
    <li><a href="04_多言語掲示板.html">多言語掲示板</a></li>
  </ul>
  `,
});
