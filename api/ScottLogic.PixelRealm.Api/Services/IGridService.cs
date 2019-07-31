using ScottLogic.PixelRealm.Api.Models.Domain;
using ScottLogic.PixelRealm.Api.Models.Request;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ScottLogic.PixelRealm.Api.Services
{
    public interface IGridService
    {
        Task<Models.Domain.Grid> CreateGrid(Models.Request.Grid createGrid);
        Task<Models.Domain.Grid> UpdateGrid(int gridId, Models.Request.Grid updateGrid);
    }
}
