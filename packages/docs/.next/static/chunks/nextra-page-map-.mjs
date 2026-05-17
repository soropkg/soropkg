import meta from "../../../pages/_meta.ts";
import cli_meta from "../../../pages/cli/_meta.ts";
import concepts_meta from "../../../pages/concepts/_meta.ts";
export const pageMap = [{
  data: meta
}, {
  name: "cli",
  route: "/cli",
  children: [{
    data: cli_meta
  }, {
    name: "add",
    route: "/cli/add",
    frontMatter: {
      "title": "soropkg add",
      "description": "Add a contract package as a dependency"
    }
  }, {
    name: "generate",
    route: "/cli/generate",
    frontMatter: {
      "title": "soropkg generate",
      "description": "Generate typed TypeScript clients for installed contract packages"
    }
  }, {
    name: "index",
    route: "/cli",
    frontMatter: {
      "title": "CLI Reference",
      "description": "Complete reference for all soropkg CLI commands"
    }
  }, {
    name: "init",
    route: "/cli/init",
    frontMatter: {
      "title": "soropkg init",
      "description": "Initialise a soroban.toml manifest for your project"
    }
  }, {
    name: "inspect",
    route: "/cli/inspect",
    frontMatter: {
      "title": "soropkg inspect",
      "description": "Read the live interface of any deployed Soroban contract"
    }
  }, {
    name: "publish",
    route: "/cli/publish",
    frontMatter: {
      "title": "soropkg publish",
      "description": "Publish a contract package to the soropkg registry"
    }
  }, {
    name: "search",
    route: "/cli/search",
    frontMatter: {
      "title": "soropkg search",
      "description": "Search the soropkg registry for contract packages"
    }
  }]
}, {
  name: "concepts",
  route: "/concepts",
  children: [{
    data: concepts_meta
  }, {
    name: "manifest",
    route: "/concepts/manifest",
    frontMatter: {
      "title": "soroban.toml",
      "description": "Complete reference for the soroban.toml manifest file"
    }
  }, {
    name: "on-chain-specs",
    route: "/concepts/on-chain-specs",
    frontMatter: {
      "title": "On-chain contract specs",
      "description": "How Soroban stores contract interfaces on-chain and how soropkg reads them"
    }
  }, {
    name: "registry",
    route: "/concepts/registry",
    frontMatter: {
      "title": "Registry",
      "description": "How the soropkg registry works"
    }
  }, {
    name: "verification",
    route: "/concepts/verification",
    frontMatter: {
      "title": "WASM verification",
      "description": "How soropkg verifies published packages against on-chain WASM hashes"
    }
  }]
}, {
  name: "contributing",
  route: "/contributing",
  frontMatter: {
    "title": "Contributing",
    "description": "How to contribute to soropkg"
  }
}, {
  name: "getting-started",
  route: "/getting-started",
  frontMatter: {
    "title": "Getting Started",
    "description": "Install soropkg and set up your first Soroban project in minutes"
  }
}, {
  name: "index",
  route: "/",
  frontMatter: {
    "title": "Introduction",
    "description": "soropkg — the package manager for Soroban smart contracts on Stellar"
  }
}];