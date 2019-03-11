load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")
load("@bazel_tools//tools/build_defs/repo:git.bzl", "git_repository")
http_archive(
    name = "build_bazel_rules_nodejs",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/0.27.3/rules_nodejs-0.27.3.tar.gz"],
    sha256 = "df4786a84a25d5b9f9eaaf9b5cac37fa1136f51c99fb0fbeed921204a1596c82",
)

load("@build_bazel_rules_nodejs//:defs.bzl", "node_repositories", "yarn_install")

node_repositories()

yarn_install(
  name = "npm",
  package_json = "//:package.json",
  yarn_lock = "//:yarn.lock",
)

load("@npm//:install_bazel_dependencies.bzl", "install_bazel_dependencies")
install_bazel_dependencies()

# Setup TypeScript toolchain
load("@npm_bazel_typescript//:defs.bzl", "ts_setup_workspace")
ts_setup_workspace()