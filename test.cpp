#include <iostream>
using namespace std;

int main() {
	// your code goes here
	int t;
	cin>>t;
	while(t--){
	    int n;
	    cin>>n;
	    int h[n];
	    for(int i=0;i<n;i++){
	        cin>>h[i];
	    }
        
	   // vector<int> arr;/
	    int val=0;
	    for(int i=0;i<n-1;i++){
	        val=h[i];
	        for(int j=i+1;j<n;j++){
	            if(h[j]==val){
	                h[j]=1;
	                h[i]=h[j];
	                
	            }
	        }
	    }

        for(int i=0;i<n;i++){
            cout<<h[i]<<" ";
        }
	    int rem=0;
	    for(int i=0;i<n-1;i++){
	        rem+=h[i+1]%h[i];
	    }
	    cout<<rem<<endl;
	   
	    
	}
	return 0;
}
