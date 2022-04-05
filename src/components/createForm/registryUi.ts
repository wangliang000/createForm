
export default function registryUi(uiData, components) {
    const _rU = {};
    Object.keys(uiData).forEach((_u) => {
        if (!_rU[_u]) {
            _rU[_u] = components[_u];
        }
    });
    return _rU;
}
