"use strict";
var app = getApp();
Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        iconList: [{
                icon: 'cardboardfill',
                color: 'red',
                badge: 120,
                name: 'VR'
            }, {
                icon: 'recordfill',
                color: 'orange',
                badge: 1,
                name: '录像'
            }, {
                icon: 'picfill',
                color: 'yellow',
                badge: 0,
                name: '图像'
            }, {
                icon: 'noticefill',
                color: 'olive',
                badge: 22,
                name: '通知'
            }, {
                icon: 'upstagefill',
                color: 'cyan',
                badge: 0,
                name: '排行榜'
            }, {
                icon: 'clothesfill',
                color: 'blue',
                badge: 0,
                name: '皮肤'
            }, {
                icon: 'discoverfill',
                color: 'purple',
                badge: 0,
                name: '发现'
            }, {
                icon: 'questionfill',
                color: 'mauve',
                badge: 0,
                name: '帮助'
            }, {
                icon: 'commandfill',
                color: 'purple',
                badge: 0,
                name: '问答'
            }, {
                icon: 'brandfill',
                color: 'mauve',
                badge: 0,
                name: '版权'
            }],
        gridCol: 3,
        skin: false
    },
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs',
        });
    },
    onLoad: function () {
        var _this = this;
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true,
            });
        }
        else if (this.data.canIUse) {
            app.userInfoReadyCallback = function (res) {
                _this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true,
                });
            };
        }
        else {
            wx.getUserInfo({
                success: function (res) {
                    app.globalData.userInfo = res.userInfo;
                    _this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true,
                    });
                },
            });
        }
    },
    getUserInfo: function (e) {
        console.log(e);
        app.globalData.userInfo = e.detail.userInfo;
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true,
        });
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFjLENBQUE7QUFFaEMsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLGFBQWE7UUFDcEIsUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsS0FBSztRQUNsQixPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQztRQUNuRCxRQUFRLEVBQUUsQ0FBQztnQkFDVCxJQUFJLEVBQUUsZUFBZTtnQkFDckIsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsSUFBSSxFQUFFLElBQUk7YUFDWCxFQUFFO2dCQUNELElBQUksRUFBRSxZQUFZO2dCQUNsQixLQUFLLEVBQUUsUUFBUTtnQkFDZixLQUFLLEVBQUUsQ0FBQztnQkFDUixJQUFJLEVBQUUsSUFBSTthQUNYLEVBQUU7Z0JBQ0QsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsS0FBSyxFQUFFLFFBQVE7Z0JBQ2YsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsSUFBSSxFQUFFLElBQUk7YUFDWCxFQUFFO2dCQUNELElBQUksRUFBRSxZQUFZO2dCQUNsQixLQUFLLEVBQUUsT0FBTztnQkFDZCxLQUFLLEVBQUUsRUFBRTtnQkFDVCxJQUFJLEVBQUUsSUFBSTthQUNYLEVBQUU7Z0JBQ0QsSUFBSSxFQUFFLGFBQWE7Z0JBQ25CLEtBQUssRUFBRSxNQUFNO2dCQUNiLEtBQUssRUFBRSxDQUFDO2dCQUNSLElBQUksRUFBRSxLQUFLO2FBQ1osRUFBRTtnQkFDRCxJQUFJLEVBQUUsYUFBYTtnQkFDbkIsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsSUFBSSxFQUFFLElBQUk7YUFDWCxFQUFFO2dCQUNELElBQUksRUFBRSxjQUFjO2dCQUNwQixLQUFLLEVBQUUsUUFBUTtnQkFDZixLQUFLLEVBQUUsQ0FBQztnQkFDUixJQUFJLEVBQUUsSUFBSTthQUNYLEVBQUU7Z0JBQ0QsSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLEtBQUssRUFBRSxPQUFPO2dCQUNkLEtBQUssRUFBRSxDQUFDO2dCQUNSLElBQUksRUFBRSxJQUFJO2FBQ1gsRUFBRTtnQkFDRCxJQUFJLEVBQUUsYUFBYTtnQkFDbkIsS0FBSyxFQUFFLFFBQVE7Z0JBQ2YsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsSUFBSSxFQUFFLElBQUk7YUFDWCxFQUFFO2dCQUNELElBQUksRUFBRSxXQUFXO2dCQUNqQixLQUFLLEVBQUUsT0FBTztnQkFDZCxLQUFLLEVBQUUsQ0FBQztnQkFDUixJQUFJLEVBQUUsSUFBSTthQUNYLENBQUM7UUFDRixPQUFPLEVBQUMsQ0FBQztRQUNULElBQUksRUFBRSxLQUFLO0tBQ1o7SUFFRCxXQUFXO1FBQ1QsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxjQUFjO1NBQ3BCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxNQUFNO1FBQU4saUJBMkJDO1FBMUJDLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7WUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxRQUFRLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRO2dCQUNqQyxXQUFXLEVBQUUsSUFBSTthQUNsQixDQUFDLENBQUE7U0FDSDthQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFHNUIsR0FBRyxDQUFDLHFCQUFxQixHQUFHLFVBQUEsR0FBRztnQkFDN0IsS0FBSSxDQUFDLE9BQU8sQ0FBQztvQkFDWCxRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVE7b0JBQ3RCLFdBQVcsRUFBRSxJQUFJO2lCQUNsQixDQUFDLENBQUE7WUFDSixDQUFDLENBQUE7U0FDRjthQUFNO1lBRUwsRUFBRSxDQUFDLFdBQVcsQ0FBQztnQkFDYixPQUFPLEVBQUUsVUFBQSxHQUFHO29CQUNWLEdBQUcsQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUE7b0JBQ3RDLEtBQUksQ0FBQyxPQUFPLENBQUM7d0JBQ1gsUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRO3dCQUN0QixXQUFXLEVBQUUsSUFBSTtxQkFDbEIsQ0FBQyxDQUFBO2dCQUNKLENBQUM7YUFDRixDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7SUFDRCxXQUFXLFlBQUMsQ0FBTTtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2QsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUE7UUFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFFBQVEsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVE7WUFDM0IsV0FBVyxFQUFFLElBQUk7U0FDbEIsQ0FBQyxDQUFBO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGluZGV4LnRzXG4vLyDojrflj5blupTnlKjlrp7kvotcbmNvbnN0IGFwcCA9IGdldEFwcDxJQXBwT3B0aW9uPigpXG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgbW90dG86ICdIZWxsbyBXb3JsZCcsXG4gICAgdXNlckluZm86IHt9LFxuICAgIGhhc1VzZXJJbmZvOiBmYWxzZSxcbiAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXG4gICAgaWNvbkxpc3Q6IFt7XG4gICAgICBpY29uOiAnY2FyZGJvYXJkZmlsbCcsXG4gICAgICBjb2xvcjogJ3JlZCcsXG4gICAgICBiYWRnZTogMTIwLFxuICAgICAgbmFtZTogJ1ZSJ1xuICAgIH0sIHtcbiAgICAgIGljb246ICdyZWNvcmRmaWxsJyxcbiAgICAgIGNvbG9yOiAnb3JhbmdlJyxcbiAgICAgIGJhZGdlOiAxLFxuICAgICAgbmFtZTogJ+W9leWDjydcbiAgICB9LCB7XG4gICAgICBpY29uOiAncGljZmlsbCcsXG4gICAgICBjb2xvcjogJ3llbGxvdycsXG4gICAgICBiYWRnZTogMCxcbiAgICAgIG5hbWU6ICflm77lg48nXG4gICAgfSwge1xuICAgICAgaWNvbjogJ25vdGljZWZpbGwnLFxuICAgICAgY29sb3I6ICdvbGl2ZScsXG4gICAgICBiYWRnZTogMjIsXG4gICAgICBuYW1lOiAn6YCa55+lJ1xuICAgIH0sIHtcbiAgICAgIGljb246ICd1cHN0YWdlZmlsbCcsXG4gICAgICBjb2xvcjogJ2N5YW4nLFxuICAgICAgYmFkZ2U6IDAsXG4gICAgICBuYW1lOiAn5o6S6KGM5qacJ1xuICAgIH0sIHtcbiAgICAgIGljb246ICdjbG90aGVzZmlsbCcsXG4gICAgICBjb2xvcjogJ2JsdWUnLFxuICAgICAgYmFkZ2U6IDAsXG4gICAgICBuYW1lOiAn55qu6IKkJ1xuICAgIH0sIHtcbiAgICAgIGljb246ICdkaXNjb3ZlcmZpbGwnLFxuICAgICAgY29sb3I6ICdwdXJwbGUnLFxuICAgICAgYmFkZ2U6IDAsXG4gICAgICBuYW1lOiAn5Y+R546wJ1xuICAgIH0sIHtcbiAgICAgIGljb246ICdxdWVzdGlvbmZpbGwnLFxuICAgICAgY29sb3I6ICdtYXV2ZScsXG4gICAgICBiYWRnZTogMCxcbiAgICAgIG5hbWU6ICfluK7liqknXG4gICAgfSwge1xuICAgICAgaWNvbjogJ2NvbW1hbmRmaWxsJyxcbiAgICAgIGNvbG9yOiAncHVycGxlJyxcbiAgICAgIGJhZGdlOiAwLFxuICAgICAgbmFtZTogJ+mXruetlCdcbiAgICB9LCB7XG4gICAgICBpY29uOiAnYnJhbmRmaWxsJyxcbiAgICAgIGNvbG9yOiAnbWF1dmUnLFxuICAgICAgYmFkZ2U6IDAsXG4gICAgICBuYW1lOiAn54mI5p2DJ1xuICAgIH1dLFxuICAgIGdyaWRDb2w6MyxcbiAgICBza2luOiBmYWxzZVxuICB9LFxuICAvLyDkuovku7blpITnkIblh73mlbBcbiAgYmluZFZpZXdUYXAoKSB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6ICcuLi9sb2dzL2xvZ3MnLFxuICAgIH0pXG4gIH0sXG4gIG9uTG9hZCgpIHtcbiAgICBpZiAoYXBwLmdsb2JhbERhdGEudXNlckluZm8pIHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIHVzZXJJbmZvOiBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyxcbiAgICAgICAgaGFzVXNlckluZm86IHRydWUsXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhLmNhbklVc2UpIHtcbiAgICAgIC8vIOeUseS6jiBnZXRVc2VySW5mbyDmmK/nvZHnu5zor7fmsYLvvIzlj6/og73kvJrlnKggUGFnZS5vbkxvYWQg5LmL5ZCO5omN6L+U5ZueXG4gICAgICAvLyDmiYDku6XmraTlpITliqDlhaUgY2FsbGJhY2sg5Lul6Ziy5q2i6L+Z56eN5oOF5Ya1XG4gICAgICBhcHAudXNlckluZm9SZWFkeUNhbGxiYWNrID0gcmVzID0+IHtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICB1c2VySW5mbzogcmVzLnVzZXJJbmZvLFxuICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyDlnKjmsqHmnIkgb3Blbi10eXBlPWdldFVzZXJJbmZvIOeJiOacrOeahOWFvOWuueWkhOeQhlxuICAgICAgd3guZ2V0VXNlckluZm8oe1xuICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgIGFwcC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIHVzZXJJbmZvOiByZXMudXNlckluZm8sXG4gICAgICAgICAgICBoYXNVc2VySW5mbzogdHJ1ZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9XG4gIH0sXG4gIGdldFVzZXJJbmZvKGU6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKGUpXG4gICAgYXBwLmdsb2JhbERhdGEudXNlckluZm8gPSBlLmRldGFpbC51c2VySW5mb1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICB1c2VySW5mbzogZS5kZXRhaWwudXNlckluZm8sXG4gICAgICBoYXNVc2VySW5mbzogdHJ1ZSxcbiAgICB9KVxuICB9LFxufSlcbiJdfQ==