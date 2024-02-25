using Microsoft.AspNetCore.SignalR;

namespace SignalRChat.Hubs
{
    public class ChatHub : Hub
    {
        public async Task SendMessage(string user, string message)
        {
            try
            {
            await Clients.All.SendAsync("GetMousePositionUser", user, message);
            await Clients.Caller.SendAsync("GetMousePositionUser",user, message);
            }
            catch (Exception ex)
            {
                 await Clients.Caller.SendAsync("error", ex.Message);
            Console.WriteLine("error aqui" + ex);
            }
            
        }
    }
}