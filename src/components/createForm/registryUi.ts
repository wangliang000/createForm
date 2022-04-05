export function registryUi(uiData, Components) {
    const _rU = {};
    Object.keys(uiData).forEach((_u) => {
        if (!_rU[_u]) {
            _rU[_u] = Components[_u];
        }
    });
}
