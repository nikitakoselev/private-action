# GitHub private action

GitHub action to run another GitHub action defined in a private Wayflyer repository.

This is an internal Wayflyer tool.

## Usage

```yaml
- uses: wayflyer/private-action
  with:
    action: setup-python@v1
    github-token: ${{ secrets.WAYFLYER_GITHUB_TOKEN }}
    with: |
      python-version: ${{ matrix.python-version }}"
```
