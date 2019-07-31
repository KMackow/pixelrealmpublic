using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ScottLogic.PixelRealm.Api.Data;
using ScottLogic.PixelRealm.Api.Models.Domain;

namespace ScottLogic.PixelRealm.Api.Repositories
{
    public class GridRepository : IGridRepository
    {
        private readonly PixelRealmContext _pixelRealmContext;

        public GridRepository(PixelRealmContext pixelRealmContext)
        {
            this._pixelRealmContext = pixelRealmContext;
        }

        public async Task CreateGrid(Grid grid)
        {
            await _pixelRealmContext.AddAsync(grid);
            await _pixelRealmContext.SaveChangesAsync();
        }

        public async Task<Grid> LoadGrid(int gridId)
        {
            return await _pixelRealmContext.Grids.FindAsync(gridId);
        }

        public async Task UpdateGrid(Grid grid)
        {
            await _pixelRealmContext.SaveChangesAsync();
        }
    }
}
